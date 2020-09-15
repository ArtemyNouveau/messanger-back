const fs = require('fs');
const path = require('path');

const {validationResult} = require('express-validator');

const dbGetters = require('../utils/getters')

const Chat = require('../models/chat');
const User = require('../models/user');

exports.getChat = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, entered data is incorrect.');
        error.statusCode = 422;
        throw error;
    }

    const chatId = req.params.chatId;
    const userId = req.userId

    try {
        const user = await dbGetters.getUser(userId);
        const chat = await dbGetters.getChatWithMessages(chatId)

        if (user.chats.every(userChatId => {
            return userChatId.toString() !== chatId.toString()
        })) {
            chat.users.push(user)
            await chat.save();

            user.chats.push(chat);
            await user.save();
        }

        res.status(200).json({
            title: chat.title,
            messages: chat.messages,
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.createChat = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, entered data is incorrect.');
        error.statusCode = 422;
        throw error;
    }

    const title = req.body.title;
    const userId = req.userId
    const chat = new Chat({
        title: title,
    });
    try {
        const user = await dbGetters.getUser(userId);
        chat.users.push(user)
        await chat.save();

        user.chats.push(chat);
        await user.save();

        res.status(200).json({
            chatId: chat._id,
            title: chat.title,
            messages: chat.messages,
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getUserChats = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, entered data is incorrect.');
        error.statusCode = 422;
        throw error;
    }

    const userId = req.userId
    try {
        // const user = await User.findById(req.userId).populate('chats');
        const user = await dbGetters.getUserWithChats(userId)


        const userChats = user.chats.reduce((response, chat) => ({
            allIds: [...response.allIds, chat._id],
            byId: {
                ...response.byId,
                [chat._id]: {
                    chatName: chat.title,
                    icon: chat.icon
                }
            },
        }), {byId: {}, allIds: []})

        res.status(200).json({
            userChats: userChats
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

// exports.updatePost = async (req, res, next) => {
//     const postId = req.params.postId;
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         const error = new Error('Validation failed, entered data is incorrect.');
//         error.statusCode = 422;
//         throw error;
//     }
//     const title = req.body.title;
//     const content = req.body.content;
//     let imageUrl = req.body.image;
//     if (req.file) {
//         imageUrl = req.file.filename;
//     }
//     if (!imageUrl) {
//         const error = new Error('No file picked.');
//         error.statusCode = 422;
//         throw error;
//     }
//     try {
//         const post = await Chat.findById(postId).populate('creator');
//         if (!post) {
//             const error = new Error('Could not find post.');
//             error.statusCode = 404;
//             throw error;
//         }
//         if (post.creator._id.toString() !== req.userId) {
//             const error = new Error('Not authorized!');
//             error.statusCode = 403;
//             throw error;
//         }
//         if (imageUrl !== post.imageUrl) {
//             clearImage(post.imageUrl);
//         }
//         post.title = title;
//         post.imageUrl = imageUrl;
//         post.content = content;
//         const result = await post.save();
//         io.getIO().emit('posts', { action: 'update', post: result });
//         res.status(200).json({ message: 'Post updated!', post: result });
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };
//
// exports.deletePost = async (req, res, next) => {
//     const postId = req.params.postId;
//     try {
//         const post = await Chat.findById(postId);
//
//         if (!post) {
//             const error = new Error('Could not find post.');
//             error.statusCode = 404;
//             throw error;
//         }
//         if (post.creator.toString() !== req.userId) {
//             const error = new Error('Not authorized!');
//             error.statusCode = 403;
//             throw error;
//         }
//         // Check logged in user
//         clearImage(post.imageUrl);
//         await Chat.findByIdAndRemove(postId);
//
//         const user = await User.findById(req.userId);
//         user.posts.pull(postId);
//         await user.save();
//         io.getIO().emit('posts', { action: 'delete', post: postId });
//         res.status(200).json({ message: 'Deleted post.' });
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };

const clearImage = fileName => {
    const path = path.join(__dirname, '../public/images/', fileName);
    fs.unlink(path, err => console.log(err));
};
