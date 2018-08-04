
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

window.addEventListener('scroll', () => {
    
    if ((window.pageYOffset > 110) && (window.pageYOffset < 530)){
        hl.classList.add('linkOn');
    }
    else{
        hl.classList.remove('linkOn')
    }
});


window.addEventListener('scroll', () => {
    
    if ((window.pageYOffset > 530) && (window.pageYOffset < 1020)){
        histL.classList.add('linkOn');
    }
    else{
        histL.classList.remove('linkOn')
    }
});

window.addEventListener('scroll', () => {
    
    if ((window.pageYOffset > 1020) && (window.pageYOffset < 1250)){
        tip.classList.add('linkOn');
    }
    else{
        tip.classList.remove('linkOn');
    }
});

window.addEventListener('scroll', () => {
    
    if ((window.pageYOffset > 1250) && (window.pageYOffset < 1500)){
        dicLink.classList.add('linkOn');
    }
    else{
        dicLink.classList.remove('linkOn');
    }
});

window.addEventListener('scroll', () => {
    
    console.log(window.pageYOffset);
});


 