var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var path = require("path");

var PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())


// app.use(express.static("public"));
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());

app.use(function (req, res){
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted: \n')
  res.end(JSON.stringify(req.body, null, 2))
})


// // Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/main.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "public/table.html"));
});
app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "public/reservation.html"));
});

app.post("/tables", function(req, res){
  var newReservation = req.body;
  console.log(newReservation);
  res.json(newReservation);
});
app.listen(PORT,function(){
console.log("listening")
});