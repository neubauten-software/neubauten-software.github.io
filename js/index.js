document.addEventListener("DOMContentLoaded", function() {
  closeDrawer();
  openDrawer();
});

function closeDrawer() {
  document.getElementById("drawer").style.width = 0;
  document.getElementById("wrapper").style.marginLeft = 0;
}

function openDrawer() {
  document.getElementById("drawer").style.width = "250px";
  document.getElementById("wrapper").style.marginLeft = "250px";
}
