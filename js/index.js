document.addEventListener("DOMContentLoaded", function() {
  openDrawer();
});

function openDrawer() {
  document.getElementById("drawer").style.width = "250px";
  document.getElementById("wrapper").style.marginLeft = "250px";
}
