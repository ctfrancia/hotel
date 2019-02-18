const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const serverConfig = require('./config/config');
const cors = require('koa-cors');
const logger = require('koa-logger');

//normally I wouldn't be opening cors like this expect its just a local host and not being put on the internet
app
  .use(cors())
  .use(logger())
  .use(bodyParser())
  .use(router.routes());

app.listen(serverConfig.port, ()=> {
  console.log(`🚀 now listening on ${serverConfig.host}, port: ${serverConfig.port}`);
});