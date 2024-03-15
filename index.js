const express = require('express');
const cors = require('cors');

const path = require('path');

const dotenv = require("dotenv").config();
const app = express();
const cookieParser = require('cookie-parser');

const port = process.env.PORT;
const server = require('http').Server(app);
const logger = require('./src/utils/logger');
const mainRouter = require('./src/routes/mainRouter');
const morganMiddleware  = require('./src/middleware/morganMiddleware');


const { errorHandler, handle404 } = require('./src/middleware/errorHandler');




server.listen(port, async () => {
    logger.info(`Server is running on port ${port}`);
});

// if (process.env.NODE_ENV === 'development') {
//     require('./src/utils/swagger')(app);
// }


var io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', function (socket) {
   console.log("user connected - ", socket.id)
  logger.info(`Web Socket | User Connected  = ${socket.id}`)
  socket.on('disconnect', function () {
    console.log('user disconnected', socket.id);
    logger.info(`Web Socket | User Disconnected  = ${socket.id}`)
    socket.disconnect();
  });
});

app.set('socketio', io);



app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));
const frontend = path.resolve(__dirname, '../build_customer');
app.use(morganMiddleware)
app.use(express.json());
app.use("/api", mainRouter);
app.use(errorHandler);
app.use(handle404);
app.use('*', express.static(frontend));