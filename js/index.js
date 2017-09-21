var posts = "channel";
var xhr = new XMLHttpRequest();

function Load() {
  xhr.oppen("GET", "channel/admin/posts.xml");
  xhr.send();
  
  xhr.onreadystatecange = function() {
    alert(xhr.responseText);
  };
}
