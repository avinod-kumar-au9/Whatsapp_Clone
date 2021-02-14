
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const mongo = require("mongodb");
const mongoClient = mongo.MongoClient;
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoUrl = "mongodb+srv://Vinu8889:Vinu8889@cluster0.3xz5r.mongodb.net/testdb?retryWrites=true&w=majority"
var path = require("path")

let dbobj;
let col_name = "whatsapp";

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname,"../frontend/build")));

// "client": "npm start --prefix ../frontend",
//     "dev": "concurrently \"npm run server\" \"npm run client\""

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname,"../frontend/build/index.html"));
// });

app.post("/addmessages", (req, res) => {
  dbobj.collection(col_name).insertOne(req.body, (err, result) => {
    if (err) throw err;
    res.status(200).send("Data Added");
  });
 
});



app.get("/messages", (req, res) => {
  dbobj
    .collection(col_name)
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});



mongoClient.connect(mongoUrl,{ useUnifiedTopology: true }, (err, connection) => {
  if (err) console.log(err);
  dbobj = connection.db("testdb");

  app.listen(port, (err) => {
    console.log("server is up");
  });
});
