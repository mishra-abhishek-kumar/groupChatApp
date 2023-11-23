const express = require('express');
const bodyParser = require('body-parser');
const loginRouter = require('./routes/Login');
const displayRouter = require('./routes/Display');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use(loginRouter);
app.use(displayRouter);

app.use((req, res, next) => {
    res.status(404).send("No Page Found");
})

app.listen(4000, () => {
    console.log("Listening on port:", 4000);
})