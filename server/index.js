import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import router from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/posts', router);

// https://cloud.mongodb.com/
const MONGODB_URL = 'mongodb://Posts:123@posts-shard-00-00.kvi1t.mongodb.net:27017,posts-shard-00-01.kvi1t.mongodb.net:27017,posts-shard-00-02.kvi1t.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-d4trke-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGODB_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(PORT, ()=>console.log(`running on port: ${PORT}`)))
.catch((error)=>console.log(error));
mongoose.set('useFindAndModify',false); // don't get any warnings at consol