const express = require('express');
const {body} = require('express-validator');

const User = require('../models/user');
const authController = require('../controllers/auth');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.put(
    '/signup',
    [
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email.')
            .custom((value, {req}) => {
                return User.findOne({email: value}).then(userDoc => {
                    if (userDoc) {
                        return Promise.reject('E-Mail address already exists!');
                    }
                });
            })
            .normalizeEmail(),
        body('password')
            .trim()
            .isLength({min: 5}),
        body('name')
            .trim()
            .not()
            .isEmpty()
    ],
    authController.signup
);

router.post('/login',
    [
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email.')
            .normalizeEmail(),
        body('password')
            .trim()
            .isLength({min: 5}),
    ],
    authController.login
);

router.post('/updateUserName',
    [
        body('name')
            .trim()
            .not()
            .isEmpty()
    ],
    isAuth,
    authController.updateUserName
);

router.post('/updateUserStatus',
    [
        body('status')
            .trim()
            .not()
            .isEmpty()
    ],
    isAuth,
    authController.updateUserStatus
);

router.get('/fetchUser', isAuth, authController.getUser);

module.exports = router;
