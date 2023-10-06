/**
 * Truncate decimal part of a number to make the number has fixed length
 * @param n
 * @param length
 * @returns
 */
export default function truncateDecimal(n: number, length = 8): number {
  const integerPartLength = n.toFixed(0).toString().length;
  const decimalPartLength = Math.max(length - integerPartLength, 0);
  return parseFloat(n.toFixed(decimalPartLength));
}
