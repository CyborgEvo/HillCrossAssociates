require('dotenv').config();
const express = require('express');

const app = express();
const favicon = require('serve-favicon');
const path = require('path');
const Port = process.env.PORT;


const webContent = require('./data');




app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use(favicon(path.join(__dirname + process.env.FAVICON_URL)))

app.route('/')
.get((req,res)=>{
    res.render("home", {
        whoWeAre : webContent.whoWeAreArr,
        whyUs : webContent.whyUS,
        wwd : webContent.whatWeDo,
        partner1 : webContent.Partner1,
        partner2 : webContent.Partner2
    }
    );
})



app.listen(Port, start);



function start(){
    console.log("Server is up and running");
}