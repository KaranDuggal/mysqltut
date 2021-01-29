var express = require('express');
var router = express.Router();

const { createUser } = require('../../controllers/users.controller')

router.post('/', async (req, res) => {
    console.log('============================================');
    console.log(req.body.username);
    console.log(req.body.password);
    console.log(req.body.email);
    console.log('============================================');
    const user = await createUser({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })
    res.send(user)
})

module.exports = router;