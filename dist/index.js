import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import express from 'express';
import cors from 'cors';
import { simpleGit } from 'simple-git';
import { generate } from './utils.js';
import { getAllfiles } from './files.js';
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("API is working!");
});
app.post("/deploy", async (req, res) => {
    const repoUrl = req.body.repourl;
    const id = generate();
    const git = simpleGit();
    await git.clone(repoUrl, path.join(__dirname, `output/${id}`));
    const repopath = path.join(__dirname, `output/${id}`);
    const files = getAllfiles(repopath);
    console.log(files);
    res.json({ id });
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
//# sourceMappingURL=index.js.map