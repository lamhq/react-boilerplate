import getLazyModule from './getLazyModule';

describe('getLazyModule', () => {
  it('shoud returns the Component', () => {
    const mockComponent = jest.fn();

    const module = {
      default: mockComponent,
    };

    const { Component } = getLazyModule(module);

    expect(Component).toBe(mockComponent);
  });
});
