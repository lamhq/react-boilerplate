/**
 * Type of async function
 * A function that accept any parameters (P) and return a Promise of generic type (R)
 *
 * Explainations:
 *  - use `unknown[]` is the type-safe counterpart of `any[]`,
 *    also, spread operator can't be used with `any[]`
 *  - use `P extends unknown[]` instead of `unknown[]` to fix type assign incompatible
 */
type AsyncFn<P extends unknown[], R> = (...args: P) => Promise<R>;

export default AsyncFn;
