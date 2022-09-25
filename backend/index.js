import express from 'express';
import cors from 'cors';
import { routerUser } from './routes/UserRoutes.js';

const PORT = 3000
const app = express();
app.use(cors())
app.use(express.json())
app.use(routerUser)

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})