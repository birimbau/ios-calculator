const cors = require('cors');

import express, { Express } from 'express';

import calculatorRoute from './routes/calculator';
import http from 'http';
import morgan from 'morgan';

const app: Express = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', calculatorRoute);

app.use((_req, res) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message,
    });
});

const httpServer = new http.Server(app);

export default httpServer;
