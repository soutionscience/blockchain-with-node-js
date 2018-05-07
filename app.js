const http = require('http');
const request = require('request');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
let port = 3000;
// let btcPrice;
// let btcBlocks;
// request({
//     url:'https://blockchain.info/stats?format=json',
//     json: true
// }, function(err, resp, body){
//   btcPrice = body.market_price_usd;
//   btcBlocks = body.n_blocks_total;
// })
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())

// app.get('/blocks', (req, res)=>res.end('the block is '+ btcBlocks))

app.get('/', function(req, res){
res.sendFile(__dirname + "/index.html")

})

app.listen(port);
console.log('app running on port', port)