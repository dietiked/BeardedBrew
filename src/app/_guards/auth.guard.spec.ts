import { AuthGuard } from './index';

describe('AuthGuard: ', () => {

  let service: AuthGuard;

  beforeEach(() => { service = new AuthGuard(); });

  it('logout() should return a promise', done => {
    service.logout().catch(error => {
      expect(error).toBe('error value');
      done();
    });
  });

  it('login() should return a promise', done => {
    service.login().catch(error => {
      expect(error).toBe('error value');
      done();
    });
  });

  it('isUserPersistent() should return true', () => {
    expect(service.isUserPersistent()).toBe(true);
  });



});
