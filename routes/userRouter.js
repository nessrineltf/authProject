const express = require('express');
const { Register } = require('../controller/authController');

const router = express.Router();
/* auth controller */ 
router.post('/register', Register);
//router.post('/login', loginUser);
router.get("/home", (req,res) => { res.send("hello home ")} );
module.exports = router;

 