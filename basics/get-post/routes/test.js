var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.render('test', {output: req.params.id})
});

router.post('/submit', function (req, res, next) {
  var id = req.body.thing;
  res.redirect('/test/'+id)
});

module.exports = router;
