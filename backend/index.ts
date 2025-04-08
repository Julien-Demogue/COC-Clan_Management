import express from 'express';
import dotenv from 'dotenv';
import { getClanInfo } from './services/cocApiService';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/clans/:clanTag', async (req, res) => {
    const clanTag = req.params.clanTag;

    if (!clanTag) {
        res.status(400).json({ error: 'Clan tag is required' });
        return;
    }

    // Validate clan tag format
    if (!clanTag.startsWith('#') || clanTag.length <= 1) {
        res.status(400).json({ error: 'Invalid clan tag format' });
        return;
    }

    try {
        const clanInfo = await getClanInfo(clanTag);
        res.json(clanInfo);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch clan info' });
    }
});

app.get('/api/clans/:clanTag/members', async (req, res) => {
    // TODO
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});