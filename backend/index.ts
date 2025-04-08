import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { getClanInfo, getClanMembers } from './services/cocApiService';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

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

        if (!clanInfo) {
            res.status(404).json({ error: 'Clan not found' });
            return;
        }

        res.json(clanInfo);
    } catch (error: any) {
        console.error('Error fetching clan info:', error);
        res.status(500).json({ error: 'An error occurred while fetching clan info' });
    }
});

app.get('/api/clans/:clanTag/members', async (req, res) => {
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
        const clanMembers = await getClanMembers(clanTag);

        if (!clanMembers) {
            res.status(404).json({ error: 'Clan not found' });
            return;
        }

        res.json(clanMembers);
    } catch (error: any) {
        console.error('Error fetching clan members:', error);
        res.status(500).json({ error: 'An error occurred while fetching clan members' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});