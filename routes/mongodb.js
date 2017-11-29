let express = require('express');
let router = express.Router();
let mongodb = require('../mongodb/mongodb');
let ObjectId = require('mongodb').ObjectID; 

router.get('/', (req, res, next) => {
	mongodb.find({}, {}, 0)
		.then((db) => {
			console.log(db)
			res.render('mongodb', { 
				title: 'Mongodb',
				mongodb: db
			});
		})
		.catch((err) => {
			console.log(err)
		});
});

router.get('/insert/:name', (req, res, next) => {
  mongodb.insert({name: req.params.name})
  	.then((db) => {
  		res.redirect('/mongodb');
		})
		.catch((err) => {
			console.log(err)
		});
});

router.get('/edit/:id-:name', (req, res, next) => {
  mongodb.edit({_id: ObjectId(req.params.id)}, {name: req.params.name})
  	.then((db) => {
  		res.redirect('/mongodb');
		})
		.catch((err) => {
			console.log(err)
		});
});

router.get('/delete/:id', (req, res, next) => {
  mongodb.remove({_id: ObjectId(req.params.id)})
  	.then((db) => {
  		res.redirect('/mongodb');
		})
		.catch((err) => {
			console.log(err)
		});
});

module.exports = router;
