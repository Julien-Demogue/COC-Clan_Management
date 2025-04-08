import axios from 'axios';

function sendApiError(message: string) {
    return { error: true, message };
}

export async function fetchClanInfo(clanTag: string) {
    if (!clanTag) {
        return sendApiError('Clan tag is required');
    }

    try {
        const response = await axios.get(`http://localhost:3000/api/clans/%23${encodeURIComponent(clanTag)}`);
        console.log(response.data);
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return sendApiError('Clan not found');
        } else {
            console.error('Error fetching clan info:', error.message);
            return sendApiError('An unexpected error occurred');
        }
    }
}

export async function fetchClanMembers(clanTag: string) {
    if (!clanTag) {
        return sendApiError('Clan tag is required');
    }

    try {
        const response = await axios.get(`http://localhost:3000/api/clans/%23${encodeURIComponent(clanTag)}/members`);
        console.log(response.data);
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return sendApiError('Clan not found');
        } else {
            console.error('Error fetching clan members:', error.message);
            return sendApiError('An unexpected error occurred');
        }
    }
}