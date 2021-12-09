const express = require('express');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');

const router = express.Router();

router.use((req, res, next)=>{
    res.locals.user = req.user;
    res.locals.followerCount = 0;
    res.locals.followerCount = 0;
    res.locals.followerIdList = [];
    next();
})

router.get('/porfile',isLoggedIn, (req, res)=>{
    res.render('profile', {title:'내 정보 - 맞냐'});
});

router.get('/join',isNotLoggedIn, (req, res)=>{
    res.render('join', {title:'회원가입 - 얼른해라'});
});

router.get('/', (req, res, next)=>{
    const twits =[];
    res.render('main',{
        title:'NodeBird',
        twits,
    });
})

module.exports = router;