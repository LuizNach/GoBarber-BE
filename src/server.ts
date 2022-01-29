import express from 'express';

const app = express();
const port = 3333;

app.get("/", (request, response) => {
    return response.status(200).json({ message: "Ok"});
})

app.listen(port, () => {
    console.info(`Server Started at ${port}`);
});
