const express = require("express");
const app = express();
const apiRouter = require("./api/index");
const appRouter = require('./app/server/index');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});

app.use('/api', apiRouter);
app.use('/', appRouter);
