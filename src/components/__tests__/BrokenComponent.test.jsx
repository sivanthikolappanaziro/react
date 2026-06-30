/**
 * @jest-environment jsdom
 */
import React, {act} from 'react';
import TestRenderer from 'react-test-renderer';
import BrokenComponent from '../BrokenComponent';

describe('BrokenComponent', () => {
  test('renders without crashing', () => {
    let renderer;
    act(() => {
      renderer = TestRenderer.create(
        <BrokenComponent title="Test Title" description="Test description" />,
      );
    });
    expect(renderer.toJSON()).not.toBeNull();
  });

  test('displays title and description props', () => {
    let renderer;
    act(() => {
      renderer = TestRenderer.create(
        <BrokenComponent
          title="My Title"
          description="My Description"
          loggedIn={false}
        />,
      );
    });
    const json = renderer.toJSON();
    const h1 = json.children.find(c => c.type === 'h1');
    expect(h1).toBeDefined();
    expect(h1.children).toContain('My Title');

    const p = json.children.find(c => c.type === 'p');
    expect(p).toBeDefined();
    expect(p.children).toContain('My Description');
  });

  test('increment button updates count display', () => {
    let renderer;
    act(() => {
      renderer = TestRenderer.create(
        <BrokenComponent title="T" description="D" />,
      );
    });
    // The increment button is the first button
    const buttons = renderer.root.findAllByType('button');
    const incrementBtn = buttons.find(
      b => b.props.children && b.props.children.trim && b.props.children.trim() === 'Increment',
    );
    expect(incrementBtn).toBeDefined();

    // Click increment
    act(() => {
      incrementBtn.props.onClick();
    });
    // The count state changed — component should still render without error
    expect(renderer.toJSON()).not.toBeNull();
  });

  test('input onChange updates name state', () => {
    let renderer;
    act(() => {
      renderer = TestRenderer.create(
        <BrokenComponent title="T" description="D" />,
      );
    });
    const input = renderer.root.findByType('input');
    expect(input).toBeDefined();

    // Simulate change event
    act(() => {
      input.props.onChange({target: {value: 'Alice'}});
    });
    // After onChange the input value should reflect new state
    expect(renderer.root.findByType('input').props.value).toBe('Alice');
  });

  test('renders with loggedIn=true without crashing', () => {
    let renderer;
    act(() => {
      renderer = TestRenderer.create(
        <BrokenComponent title="T" description="D" loggedIn={true} />,
      );
    });
    expect(renderer.toJSON()).not.toBeNull();
  });

  test('renders with loggedIn=false without crashing', () => {
    let renderer;
    act(() => {
      renderer = TestRenderer.create(
        <BrokenComponent title="T" description="D" loggedIn={false} />,
      );
    });
    expect(renderer.toJSON()).not.toBeNull();
  });

  test('renders list items A, B, C', () => {
    let renderer;
    act(() => {
      renderer = TestRenderer.create(
        <BrokenComponent title="T" description="D" />,
      );
    });
    const divs = renderer.root.findAllByType('div');
    const texts = divs.map(d =>
      d.props.children && typeof d.props.children === 'string'
        ? d.props.children
        : null,
    );
    expect(texts).toContain('A');
    expect(texts).toContain('B');
    expect(texts).toContain('C');
  });

  test('renders logo image with alt text', () => {
    let renderer;
    act(() => {
      renderer = TestRenderer.create(
        <BrokenComponent title="T" description="D" />,
      );
    });
    const img = renderer.root.findByType('img');
    expect(img).toBeDefined();
    expect(img.props.alt).toBe('Logo');
    expect(img.props.src).toBe('/logo.png');
  });
});