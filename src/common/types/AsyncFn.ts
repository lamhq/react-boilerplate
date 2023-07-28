/**
 * Type of async function
 */
type AsyncFn<R> = (...args: unknown[]) => Promise<R>;

export default AsyncFn;
