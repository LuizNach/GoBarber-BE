import express from 'express';
import { userRoutes } from './routes';

const app = express();
const port = 3333;

app.use(express.json());
app.use(userRoutes);

app.get("/", (request, response) => {
    return response.status(200).json({ message: "Ok"});
})

app.listen(port, () => {
    console.info(`Server Started at ${port}`);
});
