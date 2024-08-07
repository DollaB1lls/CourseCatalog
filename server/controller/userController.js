
const User = require('../model/userModel')

const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const { email } = newUser;

        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ message: "user already exists" });
        }
        const savedData = await newUser.save();
        res.status(200).json(savedData);

    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

const getAllUsers = async (req, res ) => {
    try {
        const userData = await User.find();
        if(!userData || userData.length === 0){
            return res.status(404).json({messsage: "no data found"});
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({message: "not found"});
    }
}

const getUserByID = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({messsage: "user not found"});
        }
        res.status(200).json(userExist);
    } catch (error) {
        res.status(500).json({message: "not found"});
    }
}

const getUserByName = async (req, res) => {
    try {
        const name = req.params.name;
        const userExist = await User.findOne({ name });
        if(!userExist){
            return res.status(404).json({message: "user not found"});
        }
        res.status(200).json(userExist);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "server error"});
    }
}
module.exports = { createUser, getAllUsers, getUserByID, getUserByName };





