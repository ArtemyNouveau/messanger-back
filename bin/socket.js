const isAuth = require('../utils/isAuth')

let io;

module.exports = {
    init: httpServer => {
        if (io) return io

        io = require('socket.io')(httpServer, {
            handlePreflightRequest: (req, res) => {
                const headers = {
                    "Access-Control-Allow-Headers": "Content-Type, Authorization",
                    "Access-Control-Allow-Origin": req.headers.origin,
                    "Access-Control-Allow-Credentials": true
                };
                res.writeHead(200, headers);
                res.end();
            }
        });

        io.use((socket, next) => {
            const header = socket.handshake.headers['authorization'];
            try {
                const userId = isAuth(header)
                if (userId) {
                    socket.userId = userId
                    return next();
                }
            } catch (err) {
                if (!err.statusCode) {
                    err.statusCode = 500;
                }
                next(err);
            }
        });
        io.set('origins', '*:*');

        return io;
    },
    getIO: () => {
        if (!io) {
            throw new Error('Socket.io not initialized!');
        }
        return io;
    }
};
