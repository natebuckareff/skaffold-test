import Koa from 'koa';

const app = new Koa();

app.use(ctx => {
    ctx.body = 'hello!!!';
});

app.listen({ port: 8080 }, () => {
    console.log('Ready on http://localhost:8080/');
});
