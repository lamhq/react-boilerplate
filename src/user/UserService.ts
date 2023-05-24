import { PromiseCache } from '../common/PromiseCache';

export class ApiService {
  constructor(private readonly cacheService: PromiseCache) {}

  public getAlbum(albumId: string): Promise<string> {
    return this.cacheService.get(
      `albums/${albumId}`,
      () =>
        new Promise<string>((rs, rj) => {
          setTimeout(() => rj(albumId), 1000);
        })
    );
  }

  public getProfile(): Promise<string> {
    return this.cacheService.get(
      'profile',
      () =>
        new Promise<string>((rs) => {
          setTimeout(() => rs('my profile'), 1000);
        })
    );
  }
}
