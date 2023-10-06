import delay from '@/common/utils/delay';
import { allPrices } from '../data';
import TokenPrice from '../types/TokenPrice';
import truncateDecimal from './truncateDecimal';

function isLatestPrice(price: TokenPrice, priceList: TokenPrice[]) {
  return !priceList.some((item) => {
    const itemDate = new Date(item.date);
    const priceDate = new Date(price.date);
    return item.currency === price.currency && item.date !== price.date && itemDate > priceDate;
  });
}

const latestPrices = allPrices.filter((price) => isLatestPrice(price, allPrices));

export default async function convert(
  srcAmt: number,
  srcCurrency: string,
  dstCurrency: string,
): Promise<number> {
  if (!srcAmt || !srcCurrency || !dstCurrency) {
    return 0;
  }

  if (srcCurrency === dstCurrency) {
    return srcAmt;
  }

  await delay(1000);

  const srcPrice = latestPrices.find((item) => item.currency === srcCurrency);
  const dstPrice = latestPrices.find((item) => item.currency === dstCurrency);
  if (!srcPrice || !dstPrice) {
    throw new Error('Token not supported');
  }

  const rawResult = (srcAmt * srcPrice.price) / dstPrice.price;
  return truncateDecimal(rawResult);
}
