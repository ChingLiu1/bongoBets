
var hDate = document.querySelector('#hDate');
var nav = document.querySelector('nav');

//nav links
var hl = document.querySelector('#homeLink');
var histL = document.querySelector('#historyLink');
var tip = document.querySelector('#tipsLink');
var dicLink = document.querySelector('#dictionary');

//link covers or section
var home = document.querySelector('#home');
var historySec = document.querySelector('#history');
var rules = document.querySelector('#rules');
var dictionary = document.querySelector('#dicCover');

//  the date code
var d = new Date();
hDate.textContent = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + " free Tips";
hDate.style.textAlign = "center";

//window scroll sticky navigation
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100)
      {
       nav.classList.add('stickyNav');
       }
    else
       {
       nav.classList.remove('stickyNav');
       }
});







 