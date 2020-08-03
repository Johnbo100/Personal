const images=['assets/img/laptopmawddach.png','assets/img/laptopMWCAR.png',
'assets/img/laptopVLCBT.png'];
const imageDescription=[
'A Joomla website with CSS mods',
'A wordpress website',
'No CMS - pure JS and HTML'];
let imageElement=0;
let start=true;

particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  
const slideshow=()=>{
  
  setInterval(()=>{  
    if(start){    
      if(imageElement>=images.length) imageElement=0;
      document.getElementById('imgcontainer').src = images[imageElement]; 
      document.getElementById('imgdesc').innerHTML = imageDescription[imageElement];
      imageElement++;
    }
    }, 4000);
       
}  

document.getElementById('leftarrow').addEventListener("click",()=>{
  start=false;
  imageElement > 0 ? imageElement--:imageElement=images.length-1;
  document.getElementById('imgcontainer').src = images[imageElement];
  document.getElementById('imgdesc').innerHTML = imageDescription[imageElement];
});
document.getElementById('rightarrow').addEventListener("click",()=>{
  start=false;
  imageElement < images.length-1 ? imageElement++:imageElement=0;
  document.getElementById('imgcontainer').src = images[imageElement];
  document.getElementById('imgdesc').innerHTML = imageDescription[imageElement];
});
//initialise slideshow to run forever until start == false
slideshow();
