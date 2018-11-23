var Place = require('../models/placeModel');
var OperationResult = require('../models/OperationResult')
var express = require('express');
var router = express.Router();

router.get('/setup', function(req, res) {
    var starterTodos = [
        {
            "postedBy": {
                "urlImageProfile": "https://randomuser.me/api/portraits/men/14.jpg",
                "nameProfile": "Enrique Johnson",
            },
            "isFavorite": true,
            "urlImagePlace": "https://www.mercadoeeventos.com.br/wp-content/uploads/2017/12/shutterstock_528411958-1.jpg",
            "latitude": 20.6274000,
            "longitude": -87.0798700,
            "likes": 78,
            "namePlace": "Playa del carmen",
            "description": "Es una de las playas preferidas para vacacionar en la Riviera Maya, disfrutando su  fina y blanca arena bajo aguas verde-azules.",
            "totalComments": "14",
        }, {
            "postedBy": {
                "urlImageProfile": "https://randomuser.me/api/portraits/women/67.jpg",
                "nameProfile": "Sherri Shaw",
            },
            "isFavorite": false,
            "urlImagePlace": "https://www.mexicodesconocido.com.mx/wp-content/uploads/2016/12/nevado-de-toluca-parque-1600.jpg",
            "latitude": 19.1786100,
            "longitude": -99.8211100,
            "likes": 50,
            "namePlace": "Nevado de Toluca",
            "description": "Volcán mexicano ubicado en el Estado de México, entre los valles de Toluca y Tenango.",
            "totalComments": "30",
        }
    ];
    Place.create(starterTodos, function(err, results) {
        if(err) throw err
        res.send(results);
    });
})

router.get('/all', function(req, res) {
    Place.find({}, function(err, todos) {
        if (err) throw err;
        res.send(todos);
    });
});

router.get('/:id', function(req, res) {
    Place.find({"placeId":req.params.id}, function(err, todo) {
        if (err) throw err;
        res.send(todo);
    });
});

router.post('/', function(req, res) {
    if (req.body.placeId) {
        let place = new Place(req.body)
        let err = place.validateSync()
        if (err) res.status(200).json(new OperationResult(false, err["errors"]))
        Place.findOneAndUpdate({"placeId":req.body.placeId}, req.body, {new: true}, function(err, todo) {
            if (err) throw err;
            res.send(todo);
        });
    } else {
        let place = new Place(req.body)
        let err = place.validateSync()
        if (err) res.status(200).json(new OperationResult(false, err["errors"]))
        place.save((err, saved) => {
            if (err) throw err
            res.status(200).json(saved)
        });
    }
});

router.delete('/', function(req, res) {
    Place.findByIdAndRemove(req.body.id, function(err) {
        if (err) throw err;
        res.send(new OperationResult(true, ""));
    })
});

module.exports = router;
