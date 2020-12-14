import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/router.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true })) // properly send request
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', router);  // add prefix /posts to all routes
app.get('/',(req, res)=>{
  res.send('Hello, posts API');
})

const PORT = process.env.PORT || 5000; // heroku default PORT

// host database on mongoDB cloud
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, 
    () => console.log(`Server Port: http://localhost:${PORT}`))) // if connect successful, print
  .catch((error) => console.log(`${error}`)); // else catch the error

mongoose.set('useFindAndModify', false); // to make sure don't get warning at console