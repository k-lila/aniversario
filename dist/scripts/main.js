function parallax(){document.addEventListener("mousemove",e=>{var t=window.innerWidth/2,n=window.innerHeight/2,a=20*((e.clientX-t)/t),r=20*((e.clientY-n)/n);document.querySelector(".card").style.setProperty("--rotatex",-1*r+"deg"),document.querySelector(".card").style.setProperty("--rotatey",a+"deg");for(let e=0;e<100;e++)setPanel(`x:${Math.floor(a)}|y:`+Math.floor(r),e)})}function parallaxMobile(){window.DeviceOrientationEvent&&window.addEventListener("deviceorientation",e=>{var t=e.beta-40,n=e.gamma;document.querySelector(".card").style.setProperty("--rotatex",-1*t+"deg"),document.querySelector(".card").style.setProperty("--rotatey",n+"deg");for(let e=0;e<100;e++)setPanel(`x:${Math.round(t)}|y:`+Math.round(n),e)},!0)}function setPanel(t,e){var n=document.querySelectorAll(".banner__panel");"initial"==e?n.forEach(e=>{e.setAttribute("data-content",t)}):n[e].setAttribute("data-content",t)}function changeCounter(){const e=document.querySelectorAll(".banner__panel");document.getElementById("counter-btn").addEventListener("click",()=>{e.forEach((e,t)=>{e.classList.add("banner--change"),setPanel("321d : 10h : 34m : 22s",t),e.addEventListener("animationend",()=>{e.classList.remove("banner--change")})})})}document.addEventListener("DOMContentLoaded",()=>{parallax(),parallaxMobile(),changeCounter()});