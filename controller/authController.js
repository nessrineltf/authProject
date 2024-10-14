const UserModel = require("../models/User.js");

const Register = async (req,res) => {
    await UserModel.create(req.body)
    .then(() => {
        res.status(200).json({message:"success"})
    })
    .catch((err) => {
        res.status(500).json(err);
    })
    
};


module.exports = {Register,}; 
