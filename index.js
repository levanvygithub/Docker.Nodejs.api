const express = require('express');
const app = express();
const port = 3001;

app.listen(port,() =>{
  console.log(`Listenning at:${port}`);
});

app.get('/foo',(req,res) => {
  res.send('hello Vy nhe');
});

app.get('/foo1',(req,res) => {
  res.json({'foo1':'bar1'});
});

app.use(express.urlencoded({
  extended:true
}));

app.post('/bar',(req,res) =>{
  var body = req.body;
  console.log(req.body.foo1);
  res.send(req.body.foo1);
});




