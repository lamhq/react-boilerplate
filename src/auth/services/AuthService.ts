import { singleton } from 'tsyringe';
import { RequestError } from 'src/error-handler';
import AccessToken from '../types/AccessToken';

@singleton()
export default class AuthService {
  public async login(email: string, password: string): Promise<AccessToken> {
    if (email === 'admin@example.com' && password === '123123') {
      return {
        id: '1',
        email: 'admin@example.com',
        accessToken: 'ABCDEF',
      };
    }

    throw new RequestError('Invalid login credential', {
      email: 'Email is wrong.',
      password: 'Password is wrong.',
    });
  }

  public async logout(): Promise<void> {
    return Promise.resolve();
  }
}
