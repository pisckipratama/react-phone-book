var express = require('express');
var router = express.Router();
var phone = require('../controller/phone.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    status: "running",
    message: "happy coding :)"
  });
});

router.get('/phonebooks', phone.getData);
router.post('/phonebooks', phone.addData);
router.put('/phonebooks/:id', phone.editData);
router.delete('/phonebooks/:id', phone.deleteData);

module.exports = router;
