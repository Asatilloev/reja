console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");    // http core modul
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1. Kirish code
app.use(express.static("public"));                // client lar uchun ochiq folder
app.use(express.json());                          // json formatida kelgan malumotlarni objectga aylantirib beradi
app.use(express.urlencoded({extended: true}));    // html dan form requiestlarni qabul qiladi


// 2. Session


// 3. Views code                  npm i ejs -  urnatib olamiz backend ichida frontend yasaymiz
app.set("views", "views");        // views folder ichidan o'qiydi, ikkinchisi folder nomi
app.set("view engine", "ejs");    // ejs traditional usulda fronend ni backend da qurish



// 4. Routing code
app.get("/author", function(req, res) {                // author.ejs
  res.render("author", {user: user});
});

app.get("/", function(req, res) {                // get client dan keladigan surovni qabul qilib oladi va javob qaytaradi
  res.render("harid");
});




const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
  console.log(`The server is running successfully on port: ${PORT}`);
});