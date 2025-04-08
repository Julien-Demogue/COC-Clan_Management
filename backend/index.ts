import express from 'express';
import dotenv from 'dotenv';
import { getClanInfo } from './services/cocApiService';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/clans/:clanTag', async (req, res) => {
    // TODO
});

app.get('/api/clans/:clanTag/members', async (req, res) => {
    // TODO
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});