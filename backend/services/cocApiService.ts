import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_TOKEN = process.env.COC_API_TOKEN;
const API_URL = 'https://api.clashofclans.com/v1';

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
    }
})

function handleApiError(error: any) {
    if (error.response) {
        const { status } = error.response;
        if (status === 404) {
            return null;
        }
        else if (status === 403) {
            throw new Error('Unauthorized access to the API');
        }
    }
    throw error;
}

export async function getClanInfo(clanTag: string) {
    try {
        const response = await axiosInstance.get(`/clans/${encodeURIComponent(clanTag)}`);
        return response.data;
    }
    catch (error: any) {
        return handleApiError(error);
    }
}

export async function getClanMembers(clanTag: string) {
    try {
        const response = await axiosInstance.get(`/clans/${encodeURIComponent(clanTag)}/members`);
        return response.data.items;
    }
    catch (error: any) {
        return handleApiError(error);
    }
}

