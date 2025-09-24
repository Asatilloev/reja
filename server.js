
const http = require("http");    // http core modul
const mongodb = require("mongodb");

let db;
const connectionStrring = "mongodb+srv://MIT_Steven:tVRjVXZzWYNSP5cX@cluster0.f0cys09.mongodb.net/Reja"

mongodb.connect(connectionStrring, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err, client) => {
  if(err) console.log("ERROR on connection MongoDB");
  else {
    console.log("MongoDB connection succeed");
    console.log(client);
    module.exports = client;
    const app = require("./app");
    const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
  console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});

  }


});
