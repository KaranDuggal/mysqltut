const bcrypt = require('bcrypt')
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
    let hashedPassword = await bcrypt.hash(userOpts.password, 10);
    userOpts.password = hashedPassword
    console.log('userOpts==========>:', userOpts)
    const user = await Users.create(userOpts)
    console.log('-------------------------run-------------');

    if (!user) {
        throw new Error('could not create user')
    }
    return user
}
async function verifyUser(userOpts) {
    if (!userOpts.email) {
        throw new Error('please enter email')
    }
    if (!userOpts.password) {
        throw new Error('please enter password')
    }
    const user = await Users.findOne({
        where: { email: userOpts.email }
    })
    console.log('user===>', user);
    if (!user) {
        throw new Error('no user with given email')
    }
    if (user.password === userOpts.password) {
        return user
    } else {
        throw new Error('Password dose not match')
    }
}
async function updateUser(userOpts) {

    if (!userOpts.email) {
        throw new Error('please enter email')
    }
    if (!userOpts.password) {
        throw new Error('please enter password')
    }
    if (!userOpts.username) {
        throw new Error('please enter password')
    }
    console.log('=---------------------------validaton dine----------', userOpts.username);

    const user = await Users.update(
        {
            username: userOpts.username,
            password: userOpts.password
        },
        {
            where:
            {
                email: userOpts.email
            }
        }
    )
    return user
}
async function deleteUser(userOpts) {

    if (!userOpts.email) {
        throw new Error('please enter email')
    }
    console.log('=---------------------------validaton dine----------', userOpts.username);
    const user = await Users.destroy({
        where:
        {
            email: userOpts.email
        }
    })
    return user
}
module.exports = {
    createUser, verifyUser, updateUser, deleteUser
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