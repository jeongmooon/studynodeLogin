const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const User = require('../models/user');

module.exports=()=>{
    passport.serializeUser((user,done)=>{
        done(null, user.id);
    });

    passport.serializeUser((id, done)=>{
        User.findOne({where:{ig}})
            .then(user => done(null, user))
            .catch(err => done(err));
    });

    local();
    kakao();
}