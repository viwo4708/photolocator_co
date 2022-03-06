/* When the user clicks on <div>, open the popup */
function myFunction() {
  var popup = document.getElementById("myPopup");
  var map = document.getElementById("popupmap");
  popup.classList.toggle("show");
  map.classList.toggle("show");
}
