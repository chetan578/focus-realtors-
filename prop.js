alert("connected!");
var home =document.querySelector("#home");
var profile=document.querySelector("#profile");
var message=document.querySelector("#message")
var setting=document.querySelector("#setting");
var displayhome = document.querySelector("#displayhome");
var displayprofile = document.querySelector("#displayprofile");
var displaymessage = document.querySelector("#displaymessage");
var displaysetting = document.querySelector("#displaysetting");



home.addEventListener("click",function(){
displayhome.textContent="lorem ipsum";

});


profile.addEventListener("click", function () {
    displayprofile.textContent = "hello friends ";

});

message.addEventListener("click", function () {
    displaymessage.textContent = "how are you ";

});

setting.addEventListener("click", function () {
    displaysetting.textContent = "bye bye ";

});
