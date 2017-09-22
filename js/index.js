alert("Hello!");

var xhr = new XMLHttpRequest();

document.addEventListener("DOMContentLoaded", function () {
  xhr.onreadystatecange = function() {
    if (this.readyState == 4 && this.status == 200) {
      LoadPosts(this);
    }
  };
  
  xhr.open("GET", "channel/admin/posts.xml", true);
  xhr.setRequestHeader("Allow-Control-Allow-Origin", "https://neubauten-software.github.io/");
  xhr.send();
});

function LoadPosts(xml) {
  var card = "<div class=\"card-view\">";
  var doc = xml.responseXML();
  var post = doc.getElementsByTagName("post");
  
  for (var i = 0; i < post.length; i++) {
    card.innerHTML += "<img src\""
      + post[i].getElementsByTagName("cover")[0].childNodes[0].nodeValue
      + "\"/><br/><h1>" + post[i].getElementsByTagName("title")[0].childNodes[0].nodeValue
      + "</h1><p>" + post[i].getElementsByTagName("description")[0].childNodes[0].nodeValue
      + "</p><a href=\"" + post[i].getElementsByTagName("link")[0].childNodes[0].getAttribute("to")
      + "\">" + post[i].getElementsByTagName("link")[0].childNodes[0].getAttribute("title") + "</a>";
  }
  
  card.innerHTML += "</div>";
  document.getElementById("content").innerHTML += card;
}
