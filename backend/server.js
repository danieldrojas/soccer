import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'
import routes from './routes/soccerRoutes';


const app = express();
const PORT = 8000;

//Mongo Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Body-Parser setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

//CORS setup
app.use(cors());

routes(app)

app.get('/', (req, res) => {
    res.send(`Our soccer application is running on ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});