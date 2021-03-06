const express = require('express');
const app = express();
require('./configuration')(app, express);
require('./api/usersApi')(app);
require('./api/tweetsApi')(app);

app.listen(7000, function () {
    console.log('Listening on port 7000!');
});
