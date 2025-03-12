import Cookies, { CookieSetOptions } from "universal-cookie";
// Now We have Only One Instance of Cookies Class across all the App
const cookies = new Cookies();

class CookieService {
  getCookie(name: string) {
    return cookies.get(name);
  }
  setCookie(name: string, value: unknown, options?: CookieSetOptions) {
    cookies.set(name, value, options);
  }
  removeCookie(name: string) {
    cookies.remove(name);
  }
}
export default new CookieService();
