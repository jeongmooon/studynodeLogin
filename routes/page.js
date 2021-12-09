const express = require('express');

const router = express.Router();

router.use((req, res, next)=>{
    res.locals.user = null;
    res.locals.followerCount = 0;
    res.locals.followerCount = 0;
    res.locals.followerIdList = [];
    next();
})

router.get('/porfile', (req, res)=>{
    res.render('profile', {title:'내 정보 - NodeBird'});
});

router.get('/join', (req, res, next)=>{
    const twits =[];
    res.render('main',{
        title:'NodeBird',
        twits,
    });
})

module.exports = router;