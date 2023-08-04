import asyncData, { StatefulPromise } from './asyncData';

describe('asyncData', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should set value and status after promise is resolved', () => {
    const resolveVal = 'success';
    const p: StatefulPromise<string> = Promise.resolve(resolveVal);

    // should throw a promise if status is `pending`
    expect(() => asyncData(p)).toThrow();

    // should set status to `pending` if status is missing
    expect(p.status).toBe('pending');

    p.finally(() => {
      // should set value and status after promise is resolved
      expect(p.status).toBe('fulfilled');
      expect(p.value).toBe(resolveVal);
    });
  });

  it('should set error and status after promise is rejected', () => {
    const err = new Error('Rejected');
    const p: StatefulPromise<string> = new Promise((rs, rj) => {
      setTimeout(() => rj(err), 10000);
    });

    // should throw a promise if status is `pending`
    expect(() => asyncData(p)).toThrow();

    // should set status to `pending` if status is missing
    expect(p.status).toBe('pending');

    // fast-forward timer in promise
    jest.runAllTimers();

    p.catch((reason) => {
      // should set value and status after promise is rejected
      expect(p.status).toBe('rejected');
      expect(p.error).toBe(err);
      expect(reason).toBe(err);
    });
  });

  it('should throw pending promise', () => {
    const p: StatefulPromise<string> = new Promise(() => {});
    p.status = 'pending';

    try {
      asyncData(p);
    } catch (error) {
      expect(error).toBe(p);
    }
  });

  it('should return resolved value if promise is resolved', () => {
    const val = 'success';
    const p: StatefulPromise<string> = Promise.resolve(val);
    p.status = 'fulfilled';
    p.value = val;
    expect(asyncData(p)).toBe(val);
  });

  it('should throw rejected value if the promise is rejected', () => {
    const err = new Error('Rejected');
    const p: StatefulPromise<string> = new Promise(() => {});
    p.status = 'rejected';
    p.error = err;

    expect(() => asyncData(p)).toThrow(err);
  });
});
