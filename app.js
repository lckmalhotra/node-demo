var express = require('express');
var app = express();

var mongojs = require('mongojs');
var db = mongojs('driver-erp',['drivers']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(bodyParser.json());

app.get('/drivers',function (req,res) {
    db.drivers.find(function(err,data){
        res.json(data);
    });
});

app.post('/drivers', function(req,res){
   db.drivers.insert(req.body, function(err,data){
       res.json(data);
   });
});

app.delete('/drivers/:id',function(req,res){
    var id = req.params.id;
    db.drivers.remove({_id : mongojs.ObjectID(id) },function(err, data){
        res.json(data);
    });
});

app.get('/drivers/:id',function(req,res){
    var id = req.params.id;
    db.drivers.findOne({_id : mongojs.ObjectID(id) },function(err, data){
        res.json(data);
    });
});


app.put('/drivers/:id',function(req,res){
    var id = req.params.id;
    db.drivers.findAndModify({query :
    {_id : mongojs.ObjectID(id) },
     update: {$set:{name: req.body.name, age: req.body.age, city: req.body.city}},
     new: true},function(err,data){
        res.json(data);
    });
});


app.listen(3000);
console.log('server is running on localhost:3000');
