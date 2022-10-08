import express from 'express';

import { routes } from './routes';

export const server = express();

server.use(express.json());

server.use(routes);
