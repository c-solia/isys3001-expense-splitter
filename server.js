const express = require("express"); //Express
const bodyParser = require("body-parser");  //Body parser
const path = require("path");   //Path
const cors = require("cors");   //Cors

const app = express();

app.use(cors());    //Used to resolve cors error

const hostname = '127.0.0.1';   //Sets hostname to be used by server
const port = 8000;  //Sets port to be used by server

//Parses URL encoded data
app.use(bodyParser.urlencoded({extended:true}));

//Serves static files
app.use(express.static(__dirname));

//Routing for index.html
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

//Listens out for requests at the given port and hostname
app.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}`)
});