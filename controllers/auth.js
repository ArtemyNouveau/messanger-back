const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const io = require('../bin/socket');
const User = require('../models/user');
const dbGetters = require('../utils/getters')

const comparePasswords = async (password1, password2) => await bcrypt.compare(password1, password2);

exports.signup = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    try {
        const hashedPw = await bcrypt.hash(password, 12);

        const user = new User({
            email: email,
            password: hashedPw,
            name: name,
        });
        const result = await user.save();
        res.status(201).json({message: 'User created!', userId: result._id});
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.login = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;
    try {
        const user = await dbGetters.getUserByEmail(email)
        loadedUser = user;
        const isEqual = await comparePasswords(password, user.password);
        if (!isEqual) {
            const error = new Error('Wrong password!');
            error.statusCode = 401;
            throw error;
        }
        console.log(process.env.JWT_SECRET)
        const token = jwt.sign(
            {
                email: loadedUser.email,
                userId: loadedUser._id.toString()
            },
            `${process.env.JWT_SECRET}`,
            {expiresIn: '365d'}
        );
        // TODO add refresh
        // TODO add socket emit login to chat rooms
        res.status(200).json({token: token, id: loadedUser._id.toString(), chatIds: loadedUser.chats, status: loadedUser.status, userName: loadedUser.name});
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getUser = async (req, res, next) => {
    const authHeader = req.get('Authorization');
    console.log(process.env.JWT_SECRET)

    try {
        const user = await dbGetters.getUser(req.userId)

        // TODO add socket emit login to chat rooms

        const token = authHeader.split(' ')[1];
        res.status(200).json({token: token, id: user._id.toString(), chatIds: user.chats, status: user.status, userName: user.name});
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.updateUserStatus = async (req, res, next) => {
    const newStatus = req.body.status;
    try {
        const user = await dbGetters.getUser(req.userId)

        user.status = newStatus;
        await user.save();
        res.status(200).json({status: newStatus});
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.updateUserName = async (req, res, next) => {
    const newName = req.body.name;
    console.log(newName)
    try {
        const user = await dbGetters.getUser(req.userId)

        user.name = newName;
        await user.save();
        res.status(200).json({name: newName});
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
