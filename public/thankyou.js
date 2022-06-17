document.write(`
<!DOCTYPE html> 
<html> 
<style> 
body, html { 
  height: 100%; 
  margin: 0; 
} 
@font-face { 
  font-family: LemonMilk; 
  src: url("https://raw.githubusercontent.com/xade-finance/xade-static/main/public/LEMONMILK-Regular.otf"); 
} 
 
@font-face { 
    font-family: InterMedium; 
    src: url("https://raw.githubusercontent.com/xade-finance/xade-static/main/public/Inter-Medium.ttf") 
} 
 
@font-face { 
    font-family: LeagueSpartan; 
    src: url("https://raw.githubusercontent.com/xade-finance/xade-static/main/public/LeagueSpartan-VariableFont_wght.ttf") 
} 
 
@font-face { 
    font-family: Neoneon; 
    src: url("./fonts/Neoneon-3zaD6.otf") 
} 
 
.bgimg { 
  height: 100%; 
  background-position: center; 
  background-size: cover; 
  position: relative; 
  color: white; 
  font-family: "Courier New", Courier, monospace; 
  font-size: 25px; 
} 
 
.topleft { 
  position: absolute; 
  top: 0; 
  left: 16px; 
} 
 
.bottomleft { 
  position: absolute; 
  bottom: 0; 
  left: 16px; 
} 
 
 
.subheading { 
     
    font-family: LeagueSpartan, "sans-serif"; 
    color: rgb(82, 92, 102, 0.7); 
    font-size: 5rem; 
    width: 100%; 
    font-weight: 700; 
    height: 50%; 
    text-align: left; 
    background: linear-gradient(-120deg, #e31298, #00FfFf); 
 
    -webkit-text-fill-color: transparent; 
    -webkit-background-clip: text; 
 
} 
 
#mobile-vid{ 
    visibility: hidden; 
} 
 
.middle { 
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  text-align: center; 
} 
 
.middle2 { 
  position: absolute; 
  top: 60%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  text-align: center; 
 
} 
 
#computer-vid { 
  object-fit: cover; 
  width: 100vw; 
  height: 100vh; 
  position: fixed; 
  top: 0; 
  left: 0; 
} 
 .heading2 { 
        display: block; 
        text-align: center; 
        font-size: 4rem; 
        font-family: LemonMilk; 
        margin-top: 1rem; 
    } 
} 
hr { 
  margin-top: 10px; 
  width: 10px; 
} 
.typed-text { 
    font-family: InterMedium; 
    /* padding-right: 1rem; */ 
    margin: 0; 
    padding: 0; 
    position: relative; 
    top: 60px; 
    font-size: 1.6rem; 
    text-align: center; 
    width: 100%; 
 
   
 
} 
@media screen and (max-width:1000px){ 
.heading2{ 
  font-size: 3.5rem; 
} 
 
    .subheading { 
        font-size: 9rem; 
        text-align: center; 
        height: 20%; 
 
    } 
 
 
 
    .typed-text { 
        left: 5px; 
        top: 200px; 
        font-size: 2rem; 
        text-align: center; 
    
    } 
} 
 
@media screen and (min-width:1100px){ 
.heading2{ 
  font-size: 3rem; 
} 
 
    .subheading { 
        font-size: 5rem; 
        text-align: center; 
        height: 20%; 
    } 
 
    .typed-text { 
        left: 5px; 
        top: 50px; 
        font-size: 1.6rem; 
        text-align: center; 
    
    } 
} 
 
</style> 
<body> 
<video autoplay muted loop id="computer-vid"> 
  <source src="https://raw.githubusercontent.com/xade-finance/xade-static/main/public/video.mp4" type="video/mp4" > 
</video> 
<div class="bgimg"> 
  <div class="topleft"> 
      <section class = heading2> 
                    XADE     
            </section> 
  </div> 
  <div class="middle"> 
       <div class = subheading> 
                            Thank you for Registering! 
                    </div> 
    <hr> 
    <br> 
      
  </div> 
  <div class="middle2"> 
    <p><span class="typed-text"></span><span class="cursor">&nbsp;</span></p> 
  </div> 
</div> 
 
<script> 
  const typedTextSpan = document.querySelector(".typed-text"); 
const cursorSpan = document.querySelector(".cursor"); 
 
const textArray = ["You will be given the Premium membership in the form of an NFT on August 31 2022", "Stay tuned to be updated and get a chance to be a part of our exclusive Beta"]; 
const typingDelay = 100; 
const erasingDelay = 50; 
const newTextDelay = 1500; // Delay between current and next text 
let textArrayIndex = 0; 
let charIndex = 0; 
 
function type() { 
  if (charIndex < textArray[textArrayIndex].length) { 
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing"); 
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex); 
    charIndex++; 
    setTimeout(type, typingDelay); 
  }  
  else { 
    cursorSpan.classList.remove("typing"); 
    setTimeout(erase, newTextDelay); 
  } 
} 
 
function erase() { 
  if (charIndex > 0) { 
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing"); 
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1); 
    charIndex--; 
    setTimeout(erase, erasingDelay); 
  }  
  else { 
    cursorSpan.classList.remove("typing"); 
    textArrayIndex++; 
    if(textArrayIndex>=textArray.length) textArrayIndex=0; 
    setTimeout(type, typingDelay + 1100); 
  } 
} 
 
document.addEventListener("DOMContentLoaded", function() { 
  if(textArray.length) setTimeout(type, newTextDelay + 250); 
}); 
</script> 
</body> 
 
</html> 
`);
