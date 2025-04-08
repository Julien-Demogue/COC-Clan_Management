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

export async function getClanInfo(clanTag: string) {
    try {
        const response = await axiosInstance.get(`/clans/${encodeURIComponent(clanTag)}`);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching clan info:', error);
        throw error;
    }
}

export async function getClanMembers(clanTag: string) {
    // TODO
}

