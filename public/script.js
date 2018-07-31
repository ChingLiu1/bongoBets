//  the date code
var hDate = document.querySelector('#hDate');

var d = new Date();
hDate.textContent = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + " Tips";
hDate.style.textAlign = "center";