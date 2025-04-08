import axios from 'axios';

const API_TOKEN = process.env.COC_API_TOKEN;
const API_URL = 'https://api.clashofclans.com/v1';

export async function getClanInfo(clanTag: string) {
    try {
        const response = await axios.get(`${API_URL}/clans/${encodeURIComponent(clanTag)}`, {
            headers: {
                Authorization: `Bearer ${API_TOKEN}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    }
    catch (error) {
        console.error('Error fetching clan info :', error);
        throw error;
    }
}