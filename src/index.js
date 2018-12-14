import express from 'express';

import {getPort} from './helpers/configHelper'
const app = express();

const port = getPort();
app.listen(port,()=>{
    console.log("Connected to "+port)
})