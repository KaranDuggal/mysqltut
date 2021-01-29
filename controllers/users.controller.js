const { Users } = require('../models')

async function createUser(userOpts) {
    if (!userOpts.username) {
        throw new Error('did not supply username')
    }
    if (!userOpts.email) {
        throw new Error('did not supply email')
    }
    if (!userOpts.password) {
        throw new Error('did not supply password')
    }
    console.log('=========== controller validation done ====================');
    const user = await Users.create(userOpts)
    console.log('===================after userOpts validation =================');
    if (!user) {
        throw new Error('could not create user')
    }
    return user
}

module.exports = {
    createUser
}

// const { Users } = require('../models')
// // const { createJwt } = require('../utils/jwt')

// async function createUser(userOpts) {
//     if (!userOpts.username) {
//         throw new Error('Did not supply username')
//     }
//     if (!userOpts.email) {
//         throw new Error('Did not supply email')
//     }
//     if (!userOpts.password) {
//         throw new Error('Did not supply password')
//     }

//     const user = await Users.create({
//         ...userOpts, // TODO: Password not in plaintext
//     })

//     if (!user) {
//         throw new Error('Error creating user')
//     }

//     const createdUser = await Users.findOne({
//         attributes: ['email', 'username', 'bio', 'image'],
//         where: {
//             username: user.username
//         }
//     })
//     const token = await createJwt(createdUser.get())

//     return {
//         ...createdUser.get(),
//         token
//     }
// }

// async function verifyUser(userOpts) {
//     if (!userOpts.email) {
//         throw new Error('Did not supply email')
//     }
//     if (!userOpts.password) {
//         throw new Error('Did not supply password')
//     }

//     const user = await Users.findOne({
//         attributes: ['email', 'username', 'bio', 'image', 'password'],
//         where: {
//             email: userOpts.email,
//         }
//     })

//     if (!user) {
//         throw new Error('No user with given email address')
//     }

//     if (user.password !== userOpts.password) {
//         throw new Error('Password does not match')
//     }
//     const token = await createJwt(user.get())
//     const userJson = {
//         ...user.get(),
//         token
//     }
//     delete userJson.password
//     return userJson
// }

// module.exports = {
//     createUser,
//     verifyUser
// }