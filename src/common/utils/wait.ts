/**
 * Helper function to simulate an async operation
 * Delay the next operation for `ms` milisecond
 * @param ms time to wait, milisecond
 */
export default function wait(ms: number) {
  return new Promise<void>((rs) => {
    setTimeout(() => rs(), ms);
  });
}
