import express from 'express';

import {getPort} from './helpers/config'
import user from './routes/user';

/** Creating express application instance */
const app = express();

/** Mounting routes */
app.use('/user',user);

/** Running HTTP server */
const port = getPort();
app.listen(port,()=>{
    console.log("Connected to "+port)
})