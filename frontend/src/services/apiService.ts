import type { ApiResponse } from '@/entities/ApiResponse.interface';
import axios from 'axios';

export async function fetchClanInfo(clanTag: string) : Promise<ApiResponse<any>> {
    return await fetchClan<any>(`http://localhost:3000/api/clans/%23${encodeURIComponent(clanTag)}`);
}

export async function fetchClanMembers(clanTag: string) : Promise<ApiResponse<any>> {
    return await fetchClan<any>(`http://localhost:3000/api/clans/%23${encodeURIComponent(clanTag)}/members`);
}

/*
    * Sends an error response for the API.
    * @param error The error message to include in the response.
    * @returns An ApiResponse object with success set to false and the provided error message.
*/
function sendApiError<T>(error: string) : ApiResponse<T> {
    return { success: false, error };
}

/*
    * Sends a successful API response.
    * @param data The data to include in the response.
    * @returns An ApiResponse object with success set to true and the provided data.
*/
function sendApiSuccess<T>(data: T) : ApiResponse<T> {
    return { success: true, data };
}

/*
    * Fetches clan information from the API.
    * @param url The URL to fetch data from.
    * @returns A promise that resolves to an ApiResponse object containing the clan data or an error message.
*/
async function fetchClan<T>(url: string) : Promise<ApiResponse<T>> { 
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