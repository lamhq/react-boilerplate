import { singleton } from 'tsyringe';
import AccessToken from '../types/AccessToken';

@singleton()
export default class AuthService {
  public async login(email: string, password: string): Promise<AccessToken> {
    if (email === 'test@admin.com' && password === '1234') {
      return {
        id: '1234',
        email: 'test@admin.com',
        accessToken: 'ABCDEF',
      };
    }

    throw new Error('Invalid login credential');
  }

  public async logout(): Promise<void> {
    return Promise.resolve();
  }
}
