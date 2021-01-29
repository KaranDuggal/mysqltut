var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json({
        user: {
            "email": "duggal@gmail.com",
            "tokan": "xuz",
        }
    })
})

module.exports = router;