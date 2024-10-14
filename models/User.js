const mongoose = require('mongoose');

/* user schema  */
const UserSchema = new mongoose.Schema({
    firstname: { 
        type: String, required: true
    },
    lastname: { 
        type: String, required: true
    },
    email: { 
        type: String, required: true, unique: true 
    },
    password: { 
        type: String, required: true 
    },
    role: { 
        type: [String], 
        enum:["USER", "ADMIN"], 
        default: "USER" 
    },
},
{
        timestamps: true 
    }
);




const User = mongoose.model('UserModel', UserSchema);
module.exports = User;
