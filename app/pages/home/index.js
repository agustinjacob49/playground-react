const express = require('express');
const router = express.Router();

const { render } = require('./controller');

router.get('/', render);

module.exports = router;
