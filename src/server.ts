import express from 'express';
import routes from './routes';

import './database';

const app = express();
const port = 3333;

app.use(express.json());
app.use(routes);

app.get("/", (request, response) => {
    return response.status(200).json({ message: "Ok"});
})

app.listen(port, () => {
    console.info(`Server Started at ${port}`);
});
