const Router = require('koa-router');
const data = require('../../api/RandomData');
const router = new Router();

router.get('/news', async (ctx) => {
  ctx.response.body = {
    status: 'ok',
    data: data.postGenerator(),
  }
});

module.exports = router;