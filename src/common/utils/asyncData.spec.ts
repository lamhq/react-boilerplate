import asyncData, { StatefulPromise } from './asyncData';

describe('asyncData', () => {
  it('should throw the promise and set its status to pending if it is not resolved/rejected', () => {
    const p = new Promise(() => {});
    p.then = jest.fn();
    const cb = () => asyncData(p);

    expect(cb).toThrow();
    expect(p.then).toBeCalled();
    try {
      cb();
    } catch (error) {
      expect(error).toMatchObject({ status: 'pending' });
    }
  });

  it('should throw rejected value if the promise is rejected', () => {
    const er = new Error('Rejected');
    const p = { status: 'rejected', error: er } as StatefulPromise<string>;
    const cb = () => asyncData(p);
    expect(cb).toThrow(er);
  });

  it('should return resolved value if promise is resolved', () => {
    const p = { status: 'fulfilled', value: 'data' } as StatefulPromise<string>;
    expect(asyncData(p)).toBe('data');
  });
});
