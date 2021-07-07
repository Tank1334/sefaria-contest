var express = require('express');
var router = express.Router();

router.get('/quiz/', (req, res) => {
    res.send(req.body)
  })

  

module.exports = router;
