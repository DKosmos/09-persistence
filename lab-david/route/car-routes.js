'use strict';

const storage = require('../lib/storage.js');
const Car = require('../model/car.js');
const response = require('../lib/response.js');

module.exports = function(router){

  router.get('/api/car', function(req, res){
    if(req.url.query.id){
      storage.fetchItem('car', req.url.query.id).then(car => {
        response.sendJSON(res, 200, car);
      }).catch(err => {
        console.error(err);
        response.sendText(res, 404, 'route not found');
      });
      return;
    }

    if(req.url.query.id === ''){
      response.sendText(res, 400, 'bad request');
      return;
    }

    if(req.url.query){
      storage.listItemIds('car').then(list => {
        response.sendJSON(res, 200, list);
      }).catch(err => {
        console.error(err);
        response.sendText(res, 404, 'route not found');
      });
      return;
    }
  });

  router.post('/api/car', function(req,res){
    try{
      var car = new Car(req.body.make, req.body.model, req.body.year);
      storage.createItem('car', car);
      response.sendJSON(res, 200, car);
    } catch(err) {
      response.sendText(res, 400, 'bad request');
    }
  });

  router.delete('/api/car', function(req,res){
    if(req.url.query.id){
      storage.deleteItem('car', req.url.query.id).then((ans) => {
        response.sendJSON(res, 204, ans);
      }).catch(err => {
        console.error(err);
        response.sendText(res, 404, 'route not found');
      });
    }
    return;
  });
};

