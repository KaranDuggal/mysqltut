var express = require('express');
var router = express.Router();

const { createUser } = require('../../controllers/users.controller')
const { verifyUser } = require('../../controllers/users.controller')
const { updateUser } = require('../../controllers/users.controller')
const { deleteUser } = require('../../controllers/users.controller')



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
router.post('/login', async (req, res) => {
    try {
        console.log('req.body.user:', req.body)
        const verify = await verifyUser(req.body)
        res.send(verify)
    } catch (err) {
        res.json({
            success: false,
            error: err
        })
    }

})
router.post('/update', async (req, res) => {
    try {
        console.log('req.body.user:', req.body)
        const update = await updateUser(req.body)
        res.json({
            success: true,
            message: "update successfully"
        })
    } catch (err) {
        res.json({
            success: false,
            error: err
        })
    }
})
router.post('/delete', async (req, res) => {
    try {
        console.log('req.body:', req.body)
        const update = await deleteUser(req.body)
        res.json({
            success: true,
            message: "delete successfully"
        })
    } catch (err) {
        res.json({
            success: false,
            error: err
        })
    }
})

module.exports = router;