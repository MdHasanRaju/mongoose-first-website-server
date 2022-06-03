const { restart } = require('nodemon');
const User = require('./user.modal');

// create a single user like post method
exports.createUser = async (req, res) => {
    try {
        const user =await User.create(req.body)
        res.status(201).json({user})

    } catch (error) {
        res.status(401).json({error})
    }
}

// get all created users like find method
exports.getAllUser = async (req, res) => {
    try {
        const allUser = await User.find({})
        res.status(200).json({users:allUser})
    } catch (error) {
        res.status(404).json({error})
    }
}

// get method for a single user with id
exports.getUserById = async (req, res)  => {
    try {
        const user =await User.findById(req.params.id)
        res.status(200).json({user})
    } catch (error) {
        res.status(404).json({error})
    }
}

// delete method for a single user with id
exports.deleteUserById = async (req, res) => {
    try {
        const user =await User.findByIdAndDelete(req.params.id)
        res.status(200).json({user})
    } catch (error) {
        res.status(404).json({error})
    }
}

// update method for a single user with id
exports.updateUserById = async (req, res) => {
    try {
        const user =await User.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({user})
    } catch (error) {
        res.status(404).json({error})
    }
}


// Crud with email query
// find a single user by email
exports.getUserByEmail = async (req, res) => {
    try {
        const email = req.params.email;
        const user = await User.find({email:email})
        res.status(200).json({user})
    } catch (error) {
        res.status(404).json({error})
    }
}

// delete a single user by email
exports.deleteUserByEmail = async (req, res) => {
    try {
        const email = req.params.email;
        const user = await User.deleteOne({email:email})
        res.status(200).json({user})
    } catch (error) {
        res.status(404).json({error})
    }
}

// update a single user by email
exports.updateUserByEmail = async (req, res) => {
    try {
        const email = req.params.email;
        const user = await User.updateOne({email:email}, req.body, {
            new:true,
            runValidators:true
        })
        res.status(200).json({user})
    } catch (error) {
        res.status(404).json({error})
    }
}




