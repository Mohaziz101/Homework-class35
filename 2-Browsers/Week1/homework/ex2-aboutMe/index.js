'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

const contentBody = document.querySelector('body');
contentBody.style.fontFamily = 'Arial, sans-serif';

document.querySelector('#nickname').textContent = ' Abdulaziz';
document.querySelector('#fav-food').textContent = ' Kebab';
document.querySelector('#hometown').textContent = ' Yemen';

const li = document.querySelectorAll('li');
li.forEach((li) => {
   li.className = 'list-item';
});

const head = document.querySelector('head');
const style = document.createElement('style');
head.appendChild(style);
// style.textContent = '.list-item {color: red;}';