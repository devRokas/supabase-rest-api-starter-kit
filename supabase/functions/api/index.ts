import { Application, Router } from 'https://deno.land/x/oak@v12.6.1/mod.ts'

const router = new Router();

router
  .get("/api", (context) => {
    context.response.body = "This is an example GET endpoint";
  })
  .post("/api", (context) => {
    context.response.body = "This is an example POST endpoint";
  });

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port: 54321 })``
