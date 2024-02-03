import { api } from "@/app/service/APIService"
import { makeAutoObservable } from "mobx"

export const LOCAL_STORAGE_ACCESS_TOKEN_KEY = "INVEST_APP_TOKEN";

export class AuthStore {
    accessToken = '';


    constructor() {
        makeAutoObservable(this);
    }

    public get isAuthenticated(): boolean {
        return !!this.token();
    }

    public token(): string | null {
        const access_token = this.accessToken;
        if (access_token) {
            return access_token;
        }

        const localStorageToken = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY)
        if (localStorageToken) {
            this.accessToken = localStorageToken;
            return localStorageToken;
        }

        return null
    }

    public fetchAccessToken = async (
        first_name: string,
        last_name: string,
        email: string,
        password: string
    ): Promise<void> => {

        try {
            const token = await api.getAuthorizationToken(first_name, last_name, email, password)
            this.setToken(token.access_token)
        } catch (error) {
            console.log(error)
        }
    }

    public logout = (): void => {
        localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    }

    public setLocalStorageToken = (): void => {
        localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY, this.accessToken);
    }

    public setToken = (token: string): void => {
        this.accessToken = token;
        this.setLocalStorageToken()
    }
}