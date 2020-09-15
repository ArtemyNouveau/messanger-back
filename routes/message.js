const express = require('express');
const { body } = require('express-validator');

const messageController = require('../controllers/message');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.put(
    '/send',
    isAuth,
    [
        body('chatId'),
        body('message')
            .trim()
            .isLength({ min: 1 }),
    ],
    messageController.createMessage
);

module.exports = router;
