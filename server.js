var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3001;


app.use(bodyParser.urlencoded({extended: false}))


app.use(bodyParser.json())

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);


app.listen(PORT,function(){
  console.log("App listening on PORT: " + PORT);
});

// app.use(express.static("public"));
// app.use(express.urlencoded({extended:true}));`
// app.use(express.json());

// // Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "public/main.html"));
// });

// // app.get("/tables", function(req, res) {
// //   res.sendFile(path.join(__dirname, "public/table.html"));
// // });
// app.get("/reservation", function(req, res) {
//   res.sendFile(path.join(__dirname, "public/reservation.html"));
// });

// app.post("/table", function(req, res){
//   var newReservation = req.body;
//   console.log(newReservation);
//   res.json(newReservation);
// });
