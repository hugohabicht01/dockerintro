const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  console.log(`[*] incoming request`)
  ctx.body = 'Hello from inside the container';
});

app.listen(3000);
console.log('[+] Server listening on port 3000')
