let express = require('express');
let router = express.Router();
let mongodb = require('../mongodb/mongodb');
let ObjectId = require('mongodb').ObjectID;

router.get('/', (req, res) => {
  mongodb.find({}, {}, 0)
    .then((db) => {
      console.log(db);
      res.render('mongodb', {
        title: 'Mongodb',
        mongodb: db
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/save/:name-:address-:city-:id', (req, res) => {
  let id = req.params.id !== 'null' ? {_id: ObjectId(req.params.id)} : {name: ''};
  let saveObj = {
    name: req.params.name,
    address: req.params.address,
    city: req.params.city
  };

  mongodb.save(id, saveObj)
    .then(() => {
      res.redirect('/mongodb');
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/delete/:id', (req, res) => {
  mongodb.remove({_id: ObjectId(req.params.id)})
    .then(() => {
      res.redirect('/mongodb');
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
