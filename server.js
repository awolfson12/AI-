import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from project root
app.use(express.static(__dirname));

app.get('/health', (req, res) => res.status(200).send('ok'));

app.get('/api/state', (req, res) => {
  res.json({
    status: 'alive',
    now: new Date().toISOString(),
    note: 'minimal state endpoint'
  });
});

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
