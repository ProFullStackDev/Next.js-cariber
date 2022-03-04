import { NextRouter, useRouter } from 'next/router';
import { setCookies, getCookie, removeCookies, checkCookies } from 'cookies-next';
import { CookieValueTypes } from 'cookies-next/lib/types';
import getUserProfileApi from '../apiNest/getUserProfileApi';

export default class UserManager {
    tokenKey: string = "token";
    profileImage: string = "img-profile";
    userId: string = "uid";
    router: NextRouter = useRouter();

    constructor() { }

    async saveToken(token: string): Promise<void> {
        await setCookies(this.tokenKey, token, { sameSite: "none", secure: true });
        const user = await getUserProfileApi();
        await this.saveUserId(user.id);
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
        this.deleteProfileImage();
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

    deleteProfileImage(): void {
        removeCookies(this.profileImage, { sameSite: "none", secure: false });
    }

    saveUserId(id: number): void {
        setCookies(this.userId, id, {sameSite: "none", secure: true});
    }

    getUserId(): CookieValueTypes {
        return getCookie(this.userId, {sameSite: "none", secure: true});
    }

    getEncodedEmail(): CookieValueTypes {
        return getCookie('encodedEmail', {sameSite: "none", secure: true});
    }

    deleteEmail(): void {
        removeCookies(this.userId, {sameSite: "none", secure: true});
    }

    redirectCheckout(sku: string): void{
        const userID = this.getUserId();
        this.router.push(`https://careerfact.wpcomstaging.com/?add-sku=${sku}&cid=${userID}`)
    }
}