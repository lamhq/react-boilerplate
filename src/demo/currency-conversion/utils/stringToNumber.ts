/**
 * Convert string to number
 * Empty string or undefined is converted to zero
 */
export default function stringToNumber(s: string | undefined): number {
  if (!s) {
    return 0;
  }
  return parseFloat(s);
}
