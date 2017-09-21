var posts = "channel";
var xhr = new XMLHttpRequest();

function Load() {
  xhr.open("GET", "channel/admin/posts.xml");
  xhr.send();
  
  xhr.onreadystatecange = function() {
    console.log(xhr.responseText);
  };
}
