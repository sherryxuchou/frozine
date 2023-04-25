// get the images
const scoop1 = document.getElementById("scoop1");
const scoop2 = document.getElementById("scoop2");
const scoop3 = document.getElementById("scoop3");

// add click event listeners to each image
scoop1.addEventListener("click", function () {
  // show the next image (scoop2)
  scoop2.style.display = "block";
});

scoop2.addEventListener("click", function () {
  // show the next image (scoop3)
  scoop3.style.display = "block";
});

scoop3.addEventListener("click", function() {
  // code to change image here
});