const express = require('express');
const app = express();
const routerApp = require('./router');
const { configuration } = require('./configuration');

const port = configuration.port;

app.use(express.json());
routerApp(app);

app.get('/',(req, res)=>{
  res.send({
    message: 'Hello'
  });
});

app.listen(port,()=>(
  console.log(`Runner App in the Port: ${port}`)
));
