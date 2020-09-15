const fs = require('fs');
const path = require('path');

const { validationResult } = require('express-validator');

const io = require('../bin/socket');
const Message = require('../models/message');
const Chat = require('../models/chat');
const User = require('../models/user');

exports.createMessage = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, entered data is incorrect.');
        error.statusCode = 422;
        throw error;
    }

    if (!req.body.chatId) {
        const error = new Error('No chat specified.');
        error.statusCode = 422;
        throw error;
    }

    const chatId = req.body.chatId;
    const userId = req.userId

    try {
        const chat = await Chat.findById(chatId);
        const user = await User.findById(userId);

        const message = new Message({
            text: req.body.message,
            creator: user,
        });

        await message.save();

        chat.messages.push(message)
        await chat.save()

        io.getIO().to(chatId).emit('message', {
            action: 'message',
            message: message,
            chatId: chatId
        });

        res.status(201).json({
            message: message,
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

// exports.getPost = async (req, res, next) => {
//     const postId = req.params.postId;
//     const post = await Post.findById(postId);
//     try {
//         if (!post) {
//             const error = new Error('Could not find post.');
//             error.statusCode = 404;
//             throw error;
//         }
//         res.status(200).json({ message: 'Post fetched.', post: post });
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };
//
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
//         const post = await Post.findById(postId).populate('creator');
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
//         const post = await Post.findById(postId);
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
//         await Post.findByIdAndRemove(postId);
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
//
// const clearImage = filePath => {
//     filePath = path.join(__dirname, '../images/', filePath);
//     fs.unlink(filePath, err => console.log(err));
// };
