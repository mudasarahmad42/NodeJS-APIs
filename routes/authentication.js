// ROUTE FOR AUTHENTICATION
const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const { registerValidation , loginValidation } = require('../helpers/validation');
const { string } = require('joi');
const jwt = require('jsonwebtoken');

/*
    Register User
*/
router.post('/register', async (req, res) => {

    //Validate the request
    const { error } = registerValidation(req.body);

    if (error) {
        return res.status(400).json(error.details[0].message);
    }

    // Check if email exists
    const user = await User.findOne({ email: req.body.email });
    if (user) { return res.status(400).json({ message: "Email already exists" }) }

    // If nothing is given in body
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        return res.json(
            { 'message': 'Request is empty' }
        );
    }

    //We will create the salt and hash the pasword before storing it in the database
    const salt = await bcrypt.genSalt(10);

    //Just in case password bypass the password validation
    const passwordEntered = String(req.body.password);

    const hashedPassword = await bcrypt.hash(passwordEntered, salt);

    const userCreated = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    })

    try {
        const savedUser = await userCreated.save();
        res.status(200).json({ _id: savedUser._id });
    }
    catch (err) {
        res.status(400).json({ message: err })
    }


})


/*
    Login User
*/
router.post('/login', async (req, res) => {

    // If nothing is given in body
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        return res.json(
            { 'message': 'Request is empty' }
        );
    }

    // Validate the request
    const { error } = loginValidation(req.body);

    if (error) {
        return res.status(400).json(error.details[0].message);
    }

    // Check if user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) { return res.status(400).json({ message: "Invalid Credentials [Email is not found]" }) }

    // Check if password exists
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) { return res.status(400).json({ message: "Invalid Credentials [Password is not correct]" }) }

    //Create and Assign a token
    const JWTtoken = jwt.sign({_id : user._id} , process.env.TOKEN_KEY);

    //Send token to header (i am not sure why it is like this and at this point i am to afraid to ask)
    res.header('Authorization' , JWTtoken);
    res.json({message : "Logged In" , token : JWTtoken})

})

module.exports = router;