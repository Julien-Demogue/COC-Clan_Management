import express from 'express';
import dotenv from 'dotenv';
import { getClanInfo } from './services/cocApiService';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/clans/:clanTag', async (req, res) => {
    const { clanTag } = req.params;
    try {
        const clanInfo = await getClanInfo(clanTag);
        res.json(clanInfo);
    } catch (error) {
        console.error('Error fetching clan info:', error);
        res.status(500).json({ error: 'Failed to fetch clan info' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});