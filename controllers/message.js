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
