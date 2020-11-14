//javascript change box 1
var redBox = document.querySelector(".redBox");
var changeBtn1 = document.querySelector(".changeBtn1");
var colorCheckRed = true;
changeBtn1.addEventListener("click",function(){
console.log("click btn1 working");

if(colorCheckRed){
    colorCheckRed = false;
    redBox.setAttribute("class","purpleBox");
}else{
colorCheckRed = true;
redBox.setAttribute("class", "redBox")
}
})

var blueBox = document.querySelector(".blueBox");
var changeBtn2 = document.querySelector(".changeBtn2");
var colorCheckblue = true
changeBtn2.addEventListener("click", function(){
    if(colorCheckblue){colorCheckblue=false; blueBox.setAttribute("class", "brownBox")}
    else{colorCheckblue=true; blueBox.setAttribute("class", "blueBox")}
})
var greenBox = document.querySelector(".greenBox");
var changeBtn3 = document.querySelector(".changeBtn3");
var colorCheckgreen = true
changeBtn3.addEventListener("click", function(){
    if(colorCheckgreen){colorCheckgreen=false; greenBox.setAttribute("class", "blackBox")}
    else{colorCheckgreen=true; greenBox.setAttribute("class", "greenBox")}
})

.brownBox{background: brown; border: 5px dashed yellow}
.blackBox{background:black; border: 5px solid red}

for changebox 2 and changebox 3
