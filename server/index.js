import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './Routes/posts.js';

const app = express();

app.use(bodyParser.json({limit: '30mb' , extended: true}));
app.use(bodyParser.urlencoded({limit:'30mb' , extended: true}));
app.use(cors());
app.use('/posts', router);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self';");
  return next();
});


//https://www.mongodb.com/cloud/atlas
const CONNECTION_URL = "mongodb+srv://yashjain:yashjain@cluster0.5b8f5.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

try {
    await mongoose.connect(CONNECTION_URL);
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  } catch (error) {
    console.log('Connection error', error)
  }
 


//mongoose.connect(CONNECTION_URL).then(() => app.listen(PORT, () => console.log(`listening on port ${PORT}`))).catch((error) => console.error(error.message));


