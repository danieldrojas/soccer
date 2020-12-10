import express from 'express';


const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`Our soccer application is running ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});