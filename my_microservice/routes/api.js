var express = require('express');
var router = express.Router();

/* GET greetings. */
router.get('/say-hello', function(req, res, next) {
  res.send('Hello members');
});

module.exports = router;
