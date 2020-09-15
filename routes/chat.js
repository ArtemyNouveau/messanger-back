const express = require('express');
const { body } = require('express-validator/check');

const chatController = require('../controllers/chat');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /feed/posts
// router.get('/posts', isAuth, feedController.getPosts);

// POST /feed/post
router.post(
    '/create',
    isAuth,
    [
        body('title')
            .trim()
            .isLength({ min: 3 }),
    ],
    chatController.createChat
);

router.get(
    '/userChats',
    isAuth,
    chatController.getUserChats
);

router.get(
    '/:chatId',
    isAuth,
    chatController.getChat
)

// router.put(
//     '/:chatId',
//     isAuth,
//     [
//         body('title')
//             .trim()
//             .isLength({ min: 5 }),
//     ],
//     feedController.updateChat
// );
//
// router.delete('/:chatId', isAuth, feedController.deleteChat);

module.exports = router;
