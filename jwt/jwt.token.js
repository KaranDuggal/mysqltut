const jwt = require('jsonwebtoken');
class TOKEN {
    constructor() { }
    createUserToken(data) {
        return new Promise(async (resolve, reject) => {
            try {
                //INFO: Create token here.
                const token = jwt.sign({
                    email: data.email,
                }, config.jwtSecret, { expiresIn: '24h' })
                resolve(token);
            } catch (err) {
                reject(err);
            }
        })
    }
}
module.exports = TOKEN