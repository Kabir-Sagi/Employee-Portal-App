const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');
const bodyParser = require('body-parser');
const mongodb = require('./database/dbOperations');
const cors = require('cors');

// configure the cors
app.use(cors());

const hostname = '127.0.0.1';
const port = 3000;

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/',(request,response) => {
    response.send(`<h2 style="color: red">Welcome to Express REST API Calls</h2>
                   <p>Please use /api/employees for REST API</p>`);
});

// configure the body parsers
app.use(jsonParser);
app.use(urlencodedParser);

// Application Routing
app.use('/api',indexRouter);

// Get the database connection object before server starts
mongodb.connectToDatabase(() => {
    app.listen(port,hostname,() => {
        console.log(`Express Server is started at  http://${hostname}:${port}`);
    });
});
