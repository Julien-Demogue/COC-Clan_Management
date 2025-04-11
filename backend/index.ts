import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { getCapitalRaidSeasons, getClanInfo, getClanMembers, getCurrentWar, getWarLog, isValidClanTag } from './services/cocApiService';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Swagger configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'COC Clan Management API',
            version: '1.0.0',
            description: 'API for managing Clash of Clans clan data',
        },
    },
    apis: [__filename],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /api/clans/{clanTag}:
 *   get:
 *     summary: Get clan information
 *     parameters:
 *       - in: path
 *         name: clanTag
 *         required: true
 *         description: Tag of the clan
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Clan information retrieved successfully
 *       400:
 *         description: Invalid or missing clan tag
 *       404:
 *         description: Clan not found
 *       500:
 *         description: Server error
 */
app.get('/api/clans/:clanTag', async (req, res) => {
    handleRequest(req, res, getClanInfo);
});

/**
 * @swagger
 * /api/clans/{clanTag}/members:
 *   get:
 *     summary: Get clan members
 *     parameters:
 *       - in: path
 *         name: clanTag
 *         required: true
 *         description: Tag of the clan
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Clan members retrieved successfully
 *       400:
 *         description: Invalid or missing clan tag
 *       404:
 *         description: Clan not found
 *       500:
 *         description: Server error
 */
app.get('/api/clans/:clanTag/members', async (req, res) => {
    handleRequest(req, res, getClanMembers);
});

/**
 * @swagger
 * /api/clans/{clanTag}/capitalraidseasons:
 *   get:
 *     summary: Get capital raid seasons
 *     parameters:
 *       - in: path
 *         name: clanTag
 *         required: true
 *         description: Tag of the clan
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Capital raid seasons retrieved successfully
 *       400:
 *         description: Invalid or missing clan tag
 *       404:
 *         description: Clan not found
 *       500:
 *         description: Server error
 */
app.get('/api/clans/:clanTag/capitalraidseasons', async (req, res) => {
    handleRequest(req, res, getCapitalRaidSeasons);
})

/**
 * @swagger
 * /api/clans/{clanTag}/currentwar:
 *   get:
 *     summary: Get current war information
 *     parameters:
 *       - in: path
 *         name: clanTag
 *         required: true
 *         description: Tag of the clan
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Current war information retrieved successfully
 *       400:
 *         description: Invalid or missing clan tag
 *       404:
 *         description: Clan not found
 *       500:
 *         description: Server error
 */
app.get('/api/clans/:clanTag/currentwar', async (req, res) => {
    handleRequest(req, res, getCurrentWar);
});

/**
 * @swagger
 * /api/clans/{clanTag}/warlog:
 *   get:
 *     summary: Get war log
 *     parameters:
 *       - in: path
 *         name: clanTag
 *         required: true
 *         description: Tag of the clan
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: War log retrieved successfully
 *       400:
 *         description: Invalid or missing clan tag
 *       404:
 *         description: Clan not found
 *       500:
 *         description: Server error
 */
app.get('/api/clans/:clanTag/warlog', async (req, res) => {
    handleRequest(req, res, getWarLog);
});

// Generic handler for requests
async function handleRequest(req: express.Request, res: express.Response, serviceFunction: Function) {
    const clanTag = req.params.clanTag;

    if (!clanTag) {
        res.status(400).json({ error: 'Clan tag is required' });
        return;
    }

    if (!isValidClanTag(clanTag)) {
        res.status(400).json({ error: 'Invalid clan tag format' });
        return;
    }

    try {
        const data = await serviceFunction(clanTag);

        if (!data) {
            res.status(404).json({ error: 'Clan not found' });
            return;
        }

        res.json(data);
    } catch (error: any) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
}

// Default route
app.use("/", (req, res) => {
    res.send("Welcome to the Clash of Clans API!");
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});