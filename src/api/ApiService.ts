import { injectable } from 'tsyringe';
import { CacheService } from '../common/CacheService';

@injectable()
export class ApiService {
  constructor(private readonly cacheService: CacheService) {}

  public getAlbum(albumId: string): Promise<string> {
    return this.cacheService.getPromise(
      `albums/${albumId}`,
      () => new Promise<string>((rs, rj) => { setTimeout(() => rj(albumId), 1000); }),
    );
  }

  public getProfile(): Promise<string> {
    return this.cacheService.getPromise(
      'profile',
      () => new Promise<string>((rs) => { setTimeout(() => rs('my profile'), 1000); }),
    );
  }
}
