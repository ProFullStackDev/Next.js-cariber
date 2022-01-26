
export default class UserManager {
    tokenKey: string = "token";

    constructor() {}

    saveToken(token: string): void {
    }

    getToken(): string | undefined {
        return "";
    }

    destroyToken(): void {
        
    }

    isLoggedIn(): boolean {
        return false;
    }
}