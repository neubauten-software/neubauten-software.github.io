console.log("Hello!");

var xhr = new XMLHttpRequest();

document.addEventListener("DOMContentLoaded", function () {
  xhr.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
      var card = "";
      var doc = this.responseXML;
      var post = doc.getElementsByTagName("post");

      for (var i = 0; i < post.length; i++) {
        card += "<div class=\"card-view\">"
          + "  <img src=\""
          + post[i].getElementsByTagName("cover")[0].childNodes[0].nodeValue
          + "\"/><br/>"
          + "  <h1>" + post[i].getElementsByTagName("title")[0].childNodes[0].nodeValue
          + "</h1>"
          + "  <p>" + post[i].getElementsByTagName("description")[0].childNodes[0].nodeValue
          + "</p>"
          + "  <a href=\"" + post[i].getElementsByTagName("link")[0].getAttribute("to")
          + "\">" + post[i].getElementsByTagName("link")[0].getAttribute("title") + "</a><br/>"
          + "  <font color=\"#949494\">" + post[i].getElementsByTagName("id")[0].childNodes[0].nodeValue + "</font>"
          + "</div>";
      }

      document.getElementById("content").innerHTML += (card);
    }
  };
  
  xhr.open("GET", "channel/admin/posts.xml");
  xhr.rersponseType = "document";
  xhr.send();
});

function LoadPosts(xml) {
  
}
