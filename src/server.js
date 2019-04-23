const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

//Disponibilizo meu servi para outros dominios
app.use(cors());

const server = require("http").Server(app);
const io = require("socket.io")(server);

io.on("connection", socket => {
  socket.on("connectRoom", box => {
    socket.join(box);
  });
});

mongoose.connect(
  "mongodb+srv://silaasdantas:silaasdantas@cluster0-wrjry.mongodb.net/minidropbox?retryWrites=true",
  {
    useNewUrlParser: true
  }
);

app.use((req, res, next) => {
  req.io = io;
  return next();
});

//configuracao dos middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/files", express.static(path.resolve(__dirname, "..", "temp")));
//configuracao para user o arquivo de rotas
app.use(require("./routes"));

// process.env.PORT -> variavel de ambiente para porta da API
app.listen(process.env.PORT || 3333);
