var link=document.querySelector("#link");
link.innerHTML="study with jihan";
link.style.color="orange";
link.style.textDecoration="none";
link.style.fontSize="1.5rem";
link.href="https://www.youtube.com";

var heading=document.querySelector("#hlw");
// heading.innerHTML="you are heading tag";

// creating html elements
var myDiv=document.querySelector(".my-div");
var h3=document.createElement("h1");
var text=document.createTextNode("this is heading 3");
h3.appendChild(text);
myDiv.appendChild(h3);

// removing html elements
var h2=document.querySelector("#hlw1");
myDiv.removeChild(h2);

// creating html elements elements top
var myDiv=document.querySelector(".my-div");
var h4=document.createElement("h1");
var text1=document.createTextNode("this is heading 4");
h4.appendChild(text1);
// var heading=document.querySelector("#hlw");
myDiv.insertBefore(h4,heading);