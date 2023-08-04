import wait from './wait';

describe('wait', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should resolves after the specified delay', () => {
    const callback = jest.fn();
    const delay = 100;
    wait(delay).finally(() => {
      callback();
    });
    expect(callback).not.toBeCalled();

    // fast-forward timer in promise
    jest.advanceTimersByTime(delay);

    // put the assertion into the event loop
    // so the callback can be called after timeout
    setTimeout(() => {
      expect(callback).toBeCalled();
      expect(callback).toHaveBeenCalledTimes(1);
    }, 0);
  });
});
