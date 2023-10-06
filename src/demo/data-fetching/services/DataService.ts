import { singleton } from 'tsyringe';
import CacheService from '@/common/services/CacheService';
import delay from '@/common/utils/delay';

@singleton()
export default class DataService {
  constructor(private readonly cacheService: CacheService) {}

  public getData(): Promise<string> {
    return this.cacheService.getPromise('profile', async () => {
      await delay(1500);
      if (Math.random() >= 0.5) {
        throw new Error('Fetch data failed');
      }
      return 'Data loaded';
    });
  }

  public async deleteData(id: string) {
    return this.cacheService.getPromise(`delete-item-${id}`, async () => {
      await delay(1500);
      if (Math.random() >= 0.5) {
        throw new Error('Delete data failed');
      }
      return `Data removed: ${id}`;
    });
  }
}
