var express= require("express");
var mongoose =require("mongoose");
var mongoose =require("mongoose");
var bodyparser=require("body-parser");

var app = express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost/property");


var propertySchema= new mongoose.Schema({
location:"string",
area:"string",
image:"string",
price:"string"
});

var Property=mongoose.model("Property",propertySchema);

/*Property.create({
location:"indrapuram",
area:"350sqft",
image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Forsyth_Barr_Building%2C_Christchurch_02.JPG/240px-Forsyth_Barr_Building%2C_Christchurch_02.JPG",
price:"60 lakhs"
},function(err,property){
if(err){
    console.log(err);
}
else{
    console.log(property);
}

});
*/

app.get("/focus",function(req,res){
    Property.find({},function(err,property){
 if(err){
     console.log(err);
 }
 else{
     res.render("home",{property:property});
 }
    });
});


app.listen(8080,function(req,res){
console.log("server started");
});