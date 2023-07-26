import { singleton } from 'tsyringe';
import { RequestError } from 'src/error-handler';
import wait from 'src/common/utils/wait';
import AccessToken from '../types/AccessToken';

/**
 * A fake authentication service for testing
 */
@singleton()
export default class AuthService {
  /**
   * Perform login using email and password
   *
   * @returns user info with access token on success
   * @throw RequestError to indicate login failed
   */
  public async login(email: string, password: string, remember = false): Promise<AccessToken> {
    await wait(1500);
    if (email === 'admin@example.com' && password === '123123') {
      // when `remember` is `true`,
      //  the server should return a http cookie
      //  that contain an access token with expire time > 0
      // else
      //  the http cookie expire time is 0,
      //  that mean it will expire after closing the browser
      // eslint-disable-next-line no-console
      console.info(`Perform login with *remember* is set to ${remember.toString()}`);
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
    await wait(1000);
    return Promise.resolve();
  }
}
