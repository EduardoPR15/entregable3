const usersControllers = require('./users.controllers')


const getAllUsers = (req,res) => {
    usersControllers.findAllUsers()
    .then( () => {
        console.log(object);
    })

}

const getUserById = () => {
    
}

const postUser = () => {
    
}

const patchUser = () => {
    
}

const deleteUser = () => {
    
}


