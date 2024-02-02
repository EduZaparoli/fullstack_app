import axios, { AxiosInstance, RawAxiosRequestHeaders } from 'axios';
import apiClientService from '../APIClientService';
import * as types from './types';

class API {
    constructor(private api: AxiosInstance) {}

    public getClient = async (): Promise<types.User> => {
        const {data} = await this.api.get<types.User>('http://localhost:5000/user/all', {
            headers: this.baseHeaders()
        });

        return data
    }

    private baseHeaders = (headers?: RawAxiosRequestHeaders): RawAxiosRequestHeaders => ({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json",
        ...headers,
    });

};

export const api = new API(apiClientService);

export {types as apiTypes}
