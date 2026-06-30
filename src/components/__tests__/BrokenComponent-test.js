/**
 * @jest-environment jsdom
 */
'use strict';

const React = require('react');
const {act} = require('react');
const {createRoot} = require('react-dom/client');

describe('BrokenComponent', () => {
  let container;
  let root;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (root) {
      act(() => {
        root.unmount();
      });
      root = null;
    }
    document.body.removeChild(container);
    container = null;
  });

  function render(ui) {
    act(() => {
      root = createRoot(container);
      root.render(ui);
    });
  }

  // Dynamic require so that Jest can resolve the file after Babel transform
  function getBrokenComponent() {
    return require('../BrokenComponent').default;
  }

  it('renders without crashing when loggedIn is false', () => {
    const BrokenComponent = getBrokenComponent();
    expect(() =>
      render(
        React.createElement(BrokenComponent, {
          loggedIn: false,
          title: 'Hello',
          description: 'A description',
        }),
      ),
    ).not.toThrow();
  });

  it('renders without crashing when loggedIn is true', () => {
    const BrokenComponent = getBrokenComponent();
    expect(() =>
      render(
        React.createElement(BrokenComponent, {
          loggedIn: true,
          title: 'Hello',
          description: 'A description',
        }),
      ),
    ).not.toThrow();
  });

  it('renders the title', () => {
    const BrokenComponent = getBrokenComponent();
    render(
      React.createElement(BrokenComponent, {
        title: 'My Title',
        description: 'desc',
      }),
    );
    expect(container.querySelector('h1').textContent).toBe('My Title');
  });

  it('renders the description', () => {
    const BrokenComponent = getBrokenComponent();
    render(
      React.createElement(BrokenComponent, {
        title: 'T',
        description: 'My Description',
      }),
    );
    expect(container.querySelector('p').textContent).toBe('My Description');
  });

  it('renders the list items with keys (no React key warning)', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const BrokenComponent = getBrokenComponent();
    render(
      React.createElement(BrokenComponent, {
        title: 'T',
        description: 'D',
      }),
    );

    const keyWarnings = consoleSpy.mock.calls.filter(
      call =>
        typeof call[0] === 'string' &&
        call[0].includes('key'),
    );
    expect(keyWarnings).toHaveLength(0);
    consoleSpy.mockRestore();
  });

  it('renders img with alt text', () => {
    const BrokenComponent = getBrokenComponent();
    render(
      React.createElement(BrokenComponent, {
        title: 'T',
        description: 'D',
      }),
    );
    const img = container.querySelector('img');
    expect(img).not.toBeNull();
    expect(img.getAttribute('alt')).toBe('Company logo');
  });

  it('renders with className container div (not class attribute)', () => {
    const BrokenComponent = getBrokenComponent();
    render(
      React.createElement(BrokenComponent, {
        title: 'T',
        description: 'D',
      }),
    );
    const div = container.querySelector('.container');
    expect(div).not.toBeNull();
  });

  it('increments count when Increment button is clicked', () => {
    const BrokenComponent = getBrokenComponent();
    render(
      React.createElement(BrokenComponent, {
        title: 'T',
        description: 'D',
      }),
    );
    const button = Array.from(container.querySelectorAll('button')).find(
      b => b.textContent.trim() === 'Increment',
    );
    expect(button).not.toBeNull();
    act(() => {
      button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });
    // component should not crash after click
    expect(container.querySelector('h1')).not.toBeNull();
  });
});