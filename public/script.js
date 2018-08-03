
var hDate = document.querySelector('#hDate');

//  the date code
var d = new Date();
hDate.textContent = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + " free Tips";
hDate.style.textAlign = "center";