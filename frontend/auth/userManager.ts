
import { setCookies, getCookie, removeCookies, checkCookies } from 'cookies-next';
import { CookieValueTypes } from 'cookies-next/lib/types';
import getUserProfileApi from '../apiNest/getUserProfileApi';

export default class UserManager {
    tokenKey: string = "token";
    profileImage: string = "img-profile";

    constructor() { }

    saveToken(token: string): void {
        setCookies(this.tokenKey, token, { sameSite: "none", secure: true });
    }

    getToken(): CookieValueTypes {
        return getCookie(this.tokenKey, { sameSite: "none", secure: true });
    }

    getJwtToken(): string {
        return "Bearer " + getCookie(this.tokenKey, { sameSite: "none", secure: true });
    }

    destroyToken(): void {
        removeCookies(this.tokenKey, {sameSite: "none", secure: true});
        this.deleteEmail();
    }

    isLoggedIn(): boolean {
        return checkCookies(this.tokenKey);
    }

    updateProfileImage(): void {
        getUserProfileApi().then((value) => {
            setCookies(this.profileImage, value.profile_image, { sameSite: "none", secure: false });
        })
    }

    getProfileImage(): CookieValueTypes {
        return getCookie(this.profileImage, { sameSite: "none", secure: false });
    }

    saveEmail(email: string): void {
        setCookies('email', email, {sameSite: "none", secure: true});
        const encodedEmail = Buffer.from(email, 'utf8').toString('base64');
        setCookies('encodedEmail', encodedEmail, {sameSite: "none", secure: true});
    }

    getEmail(): CookieValueTypes {
        return getCookie('email', {sameSite: "none", secure: true});
    }

    getEncodedEmail(): CookieValueTypes {
        return getCookie('encodedEmail', {sameSite: "none", secure: true});
    }

    deleteEmail(): void {
        removeCookies('email', {sameSite: "none", secure: true});
        removeCookies('encodedEmail', {sameSite: "none", secure: true});
    }
}