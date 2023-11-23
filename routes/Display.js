const router = require('express').Router();
const fs = require('fs');

router.get('/', (req, res, next) => {

    fs.readFile('chat.txt', 'utf8', (err, data) => {
        if (err) {
            res.send(`<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/messages" method="POST">
            <input type="text" name="message">
            <input type="hidden" name="username" id="username">
            <button type="submit">Send Message</button>`);
        } else {
            res.send(`<p>${data}</p>
            <form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/messages" method="POST">
            <input type="text" name="message">
            <input type="hidden" name="username" id="username">
            <button type="submit">Send Message</button>`);
        }
    })
})

router.post('/messages', (req, res, next) => {
    // console.log(req.body);
    
    fs.appendFileSync('chat.txt', `${req.body.username}: ${req.body.message}`);
    res.redirect('/');
})

module.exports = router;