import "dotenv/config";
import { Neogma } from "neogma";
export const neogma = new Neogma(
    {
        url: 'bolt://localhost:7687',
        username: 'neo4j',
        password: 'password',
    },
    {
        logger: console.log,
        encrypted: false,
    }
);
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import jobRoutes from './routes/jobs';

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (_req, res) => {
   res.send('Hello World');
});

app.use("/api/", jobRoutes);



app.listen(process.env.PORT || 4000, () => {
   console.log(`Server is listening on port ${process.env.PORT}`);
});