const express = require('express');

const { APP_PORT: appPort = 3000 } = process.env;

const app = express();

app.listen(appPort);