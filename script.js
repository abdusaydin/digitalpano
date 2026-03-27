function updateClock(){
let now=new Date();
document.getElementById("clock").innerText=now.toLocaleTimeString("tr-TR");
}
setInterval(updateClock,1000);

let images=["img1.png"];
let i=0;

function changeSlide(){
i++;
if(i>=images.length)i=0;
document.getElementById("slide").src=images[i];
}
setInterval(changeSlide,5000);
