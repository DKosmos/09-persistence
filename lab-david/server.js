'use strict';

const http = require('http');
const Car = require('./model/car.js');
const Router = require('./lib/router.js');
const storage = require('./lib/storage.js');
const PORT = process.env.PORT || 3000;
const router = new Router();

router.get('/api/car', function(req, res){
  if(req.url.query.id){
    storage.fetchItem('car', req.url.query.id).then(car => {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.write(JSON.stringify(car));
      res.end();
    }).catch(err => {
      console.error(err);
      res.writeHead(404, {
        'Content-Type': 'text/plain',
      });
      res.write('route not found');
      res.end();
    });
    return;
  }


  if(req.url.query.id === ''){
    res.writeHead(400, {
      'Content-Type': 'text/plain',
    });
  
    res.write('bad request');
    res.end();
    return;
  }

  if(req.url.query){
    storage.listItemIds('car').then(list => {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.write(JSON.stringify(list));
      res.end();
    }).catch(err => {
      console.error(err);
      res.writeHead(404, {
        'Content-Type': 'text/plain',
      });
      res.write('route not found');
      res.end();
    });
    return;
  }
});

router.post('/api/car', function(req,res){
  try{
    var car = new Car(req.body.make, req.body.model, req.body.year);
    storage.createItem('car', car);
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    res.write(JSON.stringify(car));
    res.end();
  } catch(err) {
    console.error(err);
    res.writeHead(400, {
      'Content-Type': 'text/plain',
    });
    res.write('bad request');
    res.end();
  }
});

router.delete('/api/car', function(req,res){
  if(req.url.query.id){
    storage.deleteItem('car', req.url.query.id).then((ans) => {
      res.writeHead(204, {
        'Content-Type': 'text/plain',
      });
      res.write(JSON.stringify(ans));
      res.end();
    }).catch(err => {
      console.error(err);
      res.writeHead(404, {
        'Content-Type': 'text/plain',
      });
      res.write('route not found');
      res.end();
    });
  }
  return;
});

const server = http.createServer(router.route());



server.listen(PORT, () => {
  console.log('server up on port:', PORT);
});