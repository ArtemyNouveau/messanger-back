#messenger backend (dev)

[Deployed on heroku.](https://messenger-interview.herokuapp.com/)

## TODO:
#### Common:
- [ ] TS
- [ ] Refactor!!!
- [ ] Test!!!
---
#### DB:
- [ ] Replace date and timestamps 
- [ ] Limit messages to fetch per one time
- [ ] ? Apply Repository pattern
- [ ] Add autoincrement field to message for sorting func!!!
---
#### Rest:
- [ ] Add endpoints for updating Chat and message
- [ ] Add delete endpoints
- [ ] Spread auth to auth and user related functions
- [ ] ? Strategies for auth
- [ ] ? SSO
- [ ] Store images in public folder and store their paths
- [ ] Refresh token!!!
---
#### Socket:
- [ ] Force one socket connection per user
- [ ] Spread socket handlers in different files
- [ ] Add error handler for socket errors
- [ ] Add socket emits for userName updates, chatName updates
- [ ] Add redis for synchronizing
- [ ] Connect user to chat rooms after logging in and emit an event in room
- [ ] Middleware for checking and preprocessing the payload like in routs 
- [ ] Cash and delete data for each socket
---
#### Additional:
- [ ] WebRTC video calls for room
- [ ] node cluster
