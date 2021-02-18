var express = require('express')
const bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/upload', function(req, res){
  console.log('some one post some thing to "/upload"');
  console.log(req.body.name)
  var description = req.body.name +
                    " is " + req.body.age + " years old" +
                    (req.body.gender === 'male' ? ', he is a Man' : ', she is a Woman') +
                    ", he/she is";
  description += req.body.age <= 25 ? ', young' : ', not too young';
  res.send(description);
})

app.get('/somethingelse', function (req, res) {
  res.send('Hello World!');
});

// app.get('/', function(req, res){
//   if(req.query.func==='plus'){
//     res.send((parseFloat(req.query.num1) + parseFloat(req.query.num2)).toString());
//   }
//   else if(req.query.func==='minos'){
//     res.send((parseFloat(req.query.num1) - parseFloat(req.query.num2)).toString());
//   }
// })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})