const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {port} = require('./src/config/serverConfig');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const ApiRoutes = require('./src/routes/index');

// mysql2 is a package to provide all drivers to connect with mysql
// we need to configure  mysql2 package so sequelize able to intera with DB easily
app.use('/api',ApiRoutes)
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})