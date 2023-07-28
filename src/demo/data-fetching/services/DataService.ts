import { singleton } from 'tsyringe';
import CacheService from 'src/common/services/CacheService';
import wait from 'src/common/utils/wait';

@singleton()
export default class DataService {
  constructor(private readonly cacheService: CacheService) {}

  public getData(): Promise<string> {
    return this.cacheService.getPromise('profile', async () => {
      await wait(1500);
      if (Math.random() >= 0.5) {
        throw new Error('Fetch data failed');
      }
      return 'Data loaded';
    });
  }

  public async deleteData(id: string) {
    await wait(1500);
    return `Data removed: ${id}`;
  }
}
