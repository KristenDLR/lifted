const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
//if it were set to true, it would drop and re-create all of the database tables on startup.
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
//sync force true to make the tables recreate if association changes| false to stop
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening on Port: ' + PORT));
});