require("dotenv").config();
import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';
import schema from './schema';

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });

server.express.use(logger("dev")) // logger 추가 [ yarn add morgan ] - graphql-yoga에는 express서버가 내장되어 있다.

server.start({port: PORT}, () => console.log(`Server running on http://localhost:${PORT}`));