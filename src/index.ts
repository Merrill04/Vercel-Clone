import express from 'express';
import cors from 'cors';
import { simpleGit } from 'simple-git';
import {generate} from "./utils.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/deploy", async (req, res) => {
  const repoUrl = req.body.repourl;
  const id = generate();
  const git = simpleGit();
  await git.clone(repoUrl, `output/${id}`);
  res.json({
    id: id,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is running on {PORT}');
});