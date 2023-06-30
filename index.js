const express = require('express');
const app = express();
const routerApp = require('./router');
const { configuration } = require('./configuration');
const {
  logError,
  boomErrorHandler,
  errorHandler,
  ormErrorHandler
} = require('./middlewares/error.handler');
const port = configuration.port;

app.use(express.json());
routerApp(app);

app.use(logError);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/',(req, res)=>{
  res.send({
    message: 'Hello'
  });
});

app.listen(port,()=>(
  console.log(`Runner App in the Port: ${port}`)
));
