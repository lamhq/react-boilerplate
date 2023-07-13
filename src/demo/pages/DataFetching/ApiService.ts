import { singleton } from 'tsyringe';
import CacheService from 'src/common/services/CacheService';

@singleton()
export class ApiService {
  constructor(private readonly cacheService: CacheService) {}

  public getData(): Promise<string> {
    return this.cacheService.getPromise(
      'profile',
      () =>
        new Promise<string>((rs, rj) => {
          setTimeout(
            () => (Math.random() >= 0.5 ? rs('Loaded data') : rj(new Error('Fetch data failed'))),
            1500
          );
        })
    );
  }
}
