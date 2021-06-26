const { Server } = require('./server');

new Server().start();

//do something when app is closing
process.on('exit', () => process.exit());

//catches ctrl+c event
process.on('SIGINT', () => process.exit());

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', () => process.exit());
process.on('SIGUSR2', () => process.exit());

//catches uncaught exceptions
process.on('uncaughtException', () => process.exit());
