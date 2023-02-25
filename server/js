const http = require('http');
const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const router = require('./routes');
const slow = require('koa-slow');

const app = new Koa();
app.use(slow({
  delay: 5000
}));

app.use(koaBody({
  text: true,
  urlencoded: true,
  multipart: true,
  json: true,
}));

app.use(cors({
  origin: '*',
  credentials: true,
  'Access-Control-Allow-Origin': true,
  allowMethods: ['GET'],
}));

app.use(router());

const port = process.env.PORT || 7070;
const server = http.createServer(app.callback());

server.listen(port);
console.log(`The server started on port ${port}`);