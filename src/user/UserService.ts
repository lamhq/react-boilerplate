import { PromiseCache } from 'src/common/PromiseCache';

export class UserService {
  constructor(private readonly cacheService: PromiseCache) {}

  public getProfile(): Promise<string> {
    return this.cacheService.get(
      'profile',
      () =>
        new Promise<string>((rs, rj) => {
          setTimeout(
            () =>
              Math.random() >= 0.5 ? rs('Loaded Profile') : rj(new Error('Fetch data failed')),
            1500
          );
        })
    );
  }
}
