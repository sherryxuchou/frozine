var cartonIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("butterSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  cartonIndex++;
  if (cartonIndex > x.length) {cartonIndex = 1}    
  x[cartonIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}