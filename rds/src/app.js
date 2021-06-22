const express = require('express');
const debug = require('debug')('b:server')
const { routerManager } = require('./routers');

const { APP_PORT: appPort = 3000 } = process.env;

const app = express();
routerManager.registerRoutes(app);

app.listen(appPort, () => {
  debug(`App listening on port ${appPort}`)
});
