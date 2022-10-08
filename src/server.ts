import express from 'express';
import { join } from 'path';

import { routes } from './routes';

export const server = express();

server.set('view engine', 'ejs');
server.set('views', join(__dirname, 'views'));
server.use(express.static(join(__dirname, '..', 'public')));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);
