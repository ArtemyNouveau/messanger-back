const User = require('../models/user');
const Chat = require('../models/chat')

const getUser = async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
        const error = new Error('User not found.');
        error.statusCode = 404;
        throw error;
    }
    return user
}

const getUserByEmail = async (email) => {
    const user = await User.findOne({email: email}).select("+password");
    if (!user) {
        const error = new Error('A user with this email could not be found.');
        error.statusCode = 401;
        throw error;
    }
    return user
}

const getUserWithChats = async (userId) => {
    const user = await User.findById(userId).select("+password").populate('chats');
    if (!user) {
        const error = new Error('A user with this email could not be found.');
        error.statusCode = 401;
        throw error;
    }
    return user
}

const getChat = async (chatId) => {
    const chat = await Chat.findById(chatId);
    if (!chat) {
        const error = new Error('User not found.');
        error.statusCode = 404;
        throw error;
    }
    return chat
}

const getChatWithMessages = async (chatId) => {
    const chat = await Chat.findById(chatId).populate({
        path: 'messages',
        populate: {
            path: "creator",
            model: 'User',
        }
    });
    if (!chat) {
        const error = new Error('User not found.');
        error.statusCode = 404;
        throw error;
    }
    return chat
}

module.exports = {
    getUser,
    getUserByEmail,
    getUserWithChats,
    getChat,
    getChatWithMessages
}
