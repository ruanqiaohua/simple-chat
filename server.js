var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var http = require('http').Server(app);
// var io = require('socket.io')(http);
// var mongoose = require('mongoose');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// var Message = mongoose.model('Message',{
//   name : String,
//   message : String
// })

// var dbUrl = 'mongodb://ruanqiaohua:62203957@mongo:27017/simple-chat'

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '',
});
const openai = new OpenAIApi(configuration);

app.get('/messages', (req, res) => {
  Message.find({},(err, messages)=> {
    res.send(messages);
  })
})


app.get('/messages/:user', (req, res) => {
  var user = req.params.user
  Message.find({name: user},(err, messages)=> {
    res.send(messages);
  })
})


app.post('/messages', async (req, res) => {
  
  try{
      // 回复消息
      var content = req.body.message;
      console.log(configuration.apiKey);
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: content}],
      });
      var text = completion.data.choices[0].message.content;
      // 返回
      res.sendStatus(200).send(text);
  }
  catch (error){
    res.sendStatus(500);
    return console.log('error',error);
  }
  finally{
    console.log('Message Posted')
  }

})



// io.on('connection', () =>{
//   console.log('a user is connected')
// })

// mongoose.set('strictQuery', true);
// mongoose.connect(dbUrl ,(err) => {
//   console.log('mongodb connected',err);
// })

var server = http.listen(80, () => {
  console.log('server is running on port', server.address().port);
});
