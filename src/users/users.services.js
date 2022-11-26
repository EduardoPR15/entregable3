const usersControllers = require('./users.controllers')


const getAllUsers = (req,res) => {
    usersControllers.findAllUsers()
    .then( (data) => {
        res.status(200).json(data)
    })
    .catch((err) =>{
        res.status(400).json({message: err.message})
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


