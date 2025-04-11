import type { IApiResponse } from '@/entities/IApiResponse';
import type { IClan } from '@/entities/IClan';
import type { IClanCapitalRaidSeason } from '@/entities/IClanCapitalRaidSeason';
import type { IClanMember } from '@/entities/IClanMember';
import type { IClanWarLogEntry } from '@/entities/IClanWarLogEntry';
import type { IWarClan } from '@/entities/IWarClan';
import axios from 'axios';

export async function fetchClanInfo(clanTag: string): Promise<IApiResponse<IClan>> {
    return await fetchFromUrl<IClan>(`http://localhost:3000/api/clans/%23${encodeURIComponent(clanTag)}`);
}

export async function fetchClanMembers(clanTag: string): Promise<IApiResponse<IClanMember[]>> {
    return await fetchFromUrl<IClanMember[]>(`http://localhost:3000/api/clans/%23${encodeURIComponent(clanTag)}/members`);
}

export async function fetchCapitalRaidSeasons(clanTag: string): Promise<IApiResponse<IClanCapitalRaidSeason[]>> {
    return await fetchFromUrl<IClanCapitalRaidSeason[]>(`http://localhost:3000/api/clans/%23${encodeURIComponent(clanTag)}/capitalraidseasons`);
}

export async function fetchCurrentWar(clanTag: string): Promise<IApiResponse<IWarClan>> {
    return await fetchFromUrl<IWarClan>(`http://localhost:3000/api/clans/%23${encodeURIComponent(clanTag)}/currentwar`);
}

export async function fetchWarLog(clanTag: string): Promise<IApiResponse<IClanWarLogEntry[]>> {
    return await fetchFromUrl<IClanWarLogEntry[]>(`http://localhost:3000/api/clans/%23${encodeURIComponent(clanTag)}/warlog`);
}

/*
    * Sends an error response for the API.
    * @param error The error message to include in the response.
    * @returns An IApiResponse object with success set to false and the provided error message.
*/
function sendApiError<T>(error: string): IApiResponse<T> {
    return { success: false, error };
}

/*
    * Sends a successful API response.
    * @param data The data to include in the response.
    * @returns An IApiResponse object with success set to true and the provided data.
*/
function sendApiSuccess<T>(data: T): IApiResponse<T> {
    return { success: true, data };
}

/*
    * Fetches API information from URL.
    * @param url The URL to fetch data from.
    * @returns A promise that resolves to an IApiResponse object containing the clan data or an error message.
*/
async function fetchFromUrl<T>(url: string): Promise<IApiResponse<T>> {
    try {
        const response = await axios.get(url);
        return sendApiSuccess(response.data);
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return sendApiError('Clan not found');
        } else {
            console.error('Error fetching clan info:', error.message);
            return sendApiError('An unexpected error occurred');
        }
    }
}