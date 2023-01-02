export class AuthService {
  loggenIn = false;

  isAuthenticated() {
    const promise = new Promise((reslove, reject) => {
      setTimeout(() => {
        reslove(this.loggenIn);
      }, 800);
    });
    return promise;
  }

  login() {
    this.loggenIn = true;
  }
  logout() {
    this.loggenIn = false;
  }
}
