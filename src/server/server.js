import express from 'express';
import cors from 'cors';
import {connectToServer, getDb} from './db/conn.js';
import {reviewRoutes} from './routes/review.js';

const port = 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(reviewRoutes);

app.listen(port, async () => {
    //connect to db
    await connectToServer(function (err) {
        if(err){console.error(err);}
    });

    console.log(`Server running on port: ${port}`);
})