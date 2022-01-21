'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
//select the cat image
const cat = document.querySelector("img");

//cat starting position
let catPosition = 0;
cat.style.left = `${catPosition}px`;

//start the interval
let walk = setInterval(catWalk, 50);

function catWalk() {

   //window width
   const windowWidth = window.innerWidth;

   //increase cat position by 10px every interval
   catPosition += 10;
   cat.style.left = `${catPosition}px`;

   //get cat position
   const rect = cat.getBoundingClientRect();

   //check if the cat reach the right-hand of the screen then reset its position to left
   const catFinalPosition = inRange(rect.left, cat.width, windowWidth);
   if (catFinalPosition) {
      catPosition = 0;
      cat.style.left = "0px";
   }

   //check if the cat reach the middle of the screen then change its picture for 5 seconds
   const checkFullHalf = inRange(rect.left, cat.width / 2, windowWidth / 2);
   if (checkFullHalf) {
      cat.src = "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424";
      clearInterval(walk); // clear the catWalk interval
      setTimeout(walkNow, 5000); //after 5 seconds start walkNow function
   }
}

function walkNow() {
   cat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
   walk = setInterval(catWalk, 50);
}

function inRange(catPosition, catWidth, windowWidth) {
   if (catPosition >= (windowWidth) - 5 - (catWidth) && catPosition < (windowWidth) + 5 - (catWidth))
      return true;
}
window.addEventListener('load', () => {
   setInterval(catWalk, 5000);
});