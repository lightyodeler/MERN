const express = require('express');
const app = express();
app.use(() => {
    console.log('heloo server');
    console.log('hello boz');
})
app.listen(4000);
