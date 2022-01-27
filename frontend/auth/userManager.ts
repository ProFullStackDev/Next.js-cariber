
import { setCookies, getCookie, removeCookies, checkCookies } from 'cookies-next';
import { CookieValueTypes } from 'cookies-next/lib/types';

export default class UserManager {
    tokenKey: string = "token";

    constructor() {}

    saveToken(token: string): void {
        setCookies(this.tokenKey, token, {sameSite: "none", secure: true});
    }

    getToken(): CookieValueTypes {
        return getCookie(this.tokenKey, {sameSite: "none", secure: true});
    }

    destroyToken(): void {
        removeCookies(this.tokenKey, {sameSite: "none", secure: true})
    }

    isLoggedIn(): boolean {
        return checkCookies(this.tokenKey);
    }
}