const router = require('express').Router();
const fs = require('fs');

router.get('/login', (req, res, next) => {
    res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" 
    action="/user" method="POST">
    <input id="username" type="text" name="user">
    <button type="submit">Login</button>`);
})

router.post('/user', (req, res, next) => {
    const user = req.body.user;
    // console.log(user);
    res.redirect('/');
})  

module.exports = router;