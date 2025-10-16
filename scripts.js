const sideOff=()=>{
    document.getElementById('pop').style.display="flex";
    document.getElementById('left').style.display="none";
    document.getElementById('profile').style.display="none";
    document.getElementById('right').style.width="98%";
    resizeParent(98); /////////////////////////////////////////////
}

const sideOn=()=>{
    document.getElementById('pop').style.display="none";
    document.getElementById('left').style.display="block";
    document.getElementById('right').style.width="75%"; 
    document.getElementById('profile').style.display="none"; 
}

const sideOnMobile=()=>{
  document.getElementById('left').style.display="block";
  document.getElementById('left').style.width="100%";
  document.getElementById('right').style.display="none"; 
}

const userProfileOn=()=>{
  document.getElementById('pop').style.display="flex";
  document.getElementById('left').style.display="none";
  document.getElementById('right').style.width="75%";
  document.getElementById('profile').style.display="flex";
  notificationsOff();
}

function resizeParent(percent) {
  const parent = document.getElementById("right");
  const children = document.querySelectorAll(".rightaa"); // only class here

  // Set parent width
  parent.style.width = percent + "%";

  // Set child width based on parent size
  const childWidth = percent === 98 ? "21.5rem" : "24.5rem";

  // Apply to each child
  children.forEach(child => {
    // Only apply to children, not the parent (which also has class "right")
    if (child !== parent) {
      child.style.width = childWidth;
    }
  });
}


const userProfileOff=()=>{
  document.getElementById('pop').style.display="flex";
  document.getElementById('left').style.display="none";
  document.getElementById('right').style.width="98%";
  document.getElementById('profile').style.display="none";
  resizeParent(98); /////////////////////////////////////////////
}

function allOn(){  
  document.getElementById("l1").style.backgroundColor="green";
  document.getElementById("l1").style.color="white";
  document.getElementById("l1").style.boxShadow="1px 1px 1px 1px black";
  document.getElementById("l2").style.backgroundColor="transparent";
  document.getElementById("l2").style.color="black";
  document.getElementById("l2").style.boxShadow="0px 0px 0px 0px transparent";
  document.getElementById("l3").style.backgroundColor="transparent";
  document.getElementById("l3").style.color="black";
  document.getElementById("l3").style.boxShadow="0px 0px 0px 0px transparent";
  document.getElementById("l4").style.backgroundColor="transparent";
  document.getElementById("l4").style.color="black";
  document.getElementById("l4").style.boxShadow="0px 0px 0px 0px transparent";
}

function rentOn(){
  document.getElementById("l2").style.backgroundColor="green";
  document.getElementById("l2").style.color="white";
  document.getElementById("l2").style.boxShadow="1px 1px 1px 1px black";
  document.getElementById("l1").style.backgroundColor="transparent";
  document.getElementById("l1").style.color="black";
  document.getElementById("l1").style.boxShadow="0px 0px 0px 0px transparent";
  document.getElementById("l3").style.backgroundColor="transparent";
  document.getElementById("l3").style.color="black";
  document.getElementById("l3").style.boxShadow="0px 0px 0px 0px transparent";
  document.getElementById("l4").style.backgroundColor="transparent";
  document.getElementById("l4").style.color="black";
  document.getElementById("l4").style.boxShadow="0px 0px 0px 0px transparent";
}

function buyOn(){
  document.getElementById("l3").style.backgroundColor="green";
  document.getElementById("l3").style.color="white";
  document.getElementById("l3").style.boxShadow="1px 1px 1px 1px black";
  document.getElementById("l1").style.backgroundColor="transparent";
  document.getElementById("l1").style.color="black";
  document.getElementById("l1").style.boxShadow="0px 0px 0px 0px transparent";
  document.getElementById("l2").style.backgroundColor="transparent";
  document.getElementById("l2").style.color="black";
  document.getElementById("l2").style.boxShadow="0px 0px 0px 0px transparent";
  document.getElementById("l4").style.backgroundColor="transparent";
  document.getElementById("l4").style.color="black";
  document.getElementById("l4").style.boxShadow="0px 0px 0px 0px transparent";
}

function sellOn(){
  document.getElementById("l4").style.backgroundColor="green";
  document.getElementById("l4").style.color="white";
  document.getElementById("l4").style.boxShadow="1px 1px 1px 1px black";
  document.getElementById("l1").style.backgroundColor="transparent";
  document.getElementById("l1").style.color="black";
  document.getElementById("l1").style.boxShadow="0px 0px 0px 0px transparent";
  document.getElementById("l2").style.backgroundColor="transparent";
  document.getElementById("l2").style.color="black";
  document.getElementById("l2").style.boxShadow="0px 0px 0px 0px transparent";
  document.getElementById("l3").style.backgroundColor="transparent";
  document.getElementById("l3").style.color="black";
  document.getElementById("l3").style.boxShadow="0px 0px 0px 0px transparent";
}

function rateLike(){
    document.getElementById("like").style.borderRadius="100%";
    document.getElementById("like").style.border="5px solid pink";
    document.getElementById("Unlike").style.borderRadius="0%";
    document.getElementById("Unlike").style.border="0px solid transparent";  
}

function rateUnLike(){
  document.getElementById("Unlike").style.borderRadius="100%";
  document.getElementById("Unlike").style.border="5px solid pink";  
  document.getElementById("like").style.borderRadius="0%";
  document.getElementById("like").style.border="0px solid transparent";
}

function notificationsOff(){
  document.getElementById("notifications").style.display="none";
  document.getElementById("notifications1").style.backgroundColor="rgb(215, 215, 215)";
}

function notificationsOn(){
  document.getElementById("notifications").style.display="block";
  document.getElementById("notifications1").style.backgroundColor="rgb(255, 108, 54)";
  userProfileOff();
}

function overNotification(){
  document.getElementById("notifications1").style.backgroundColor="(215, 215, 215)";
}

function heartOn(){
  document.getElementById("heart1").style.display="none";
  document.getElementById('heart2').style.display="block";
  document.getElementById('r1a').style.backgroundColor="pink";
}

function heartOff(){
  document.getElementById('heart2').style.display="none";
  document.getElementById('heart1').style.display="block";
  document.getElementById('r1a').style.backgroundColor="white";
}

function mobileMenuOff(){
  document.getElementById('mobileMenu').style.display="none";
}

function mobileMenuOn(){
  document.getElementById('mobileMenu').style.display="block";
}
function offAgent(){
  document.getElementById("findAgent").style.display="none";
}
function onAgent(){
  document.getElementById("findAgent").style.display="block";
 
}
