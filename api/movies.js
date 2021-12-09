const express = require("express");
const router = express.Router();
const { searchByString } = require('../services/movies');

router.use('/search',  (req, res) => {

    const { name } = req.query;

    searchByString(name)
    .then(response => {
        res.status(response.status).json(response.data);
    })
    .catch(error => {
        res.status(500).json({...error});
    });
});

module.exports = router;