var input, locale_HTML, pr, result_arr, result_store;

locale_HTML = document.body.innerHTML;

document.addEventListener("DOMContentLoaded", function() {
  function findText(name, status) {
    input = document.getElementById(name).value;

    if (input.length < 3 && status == true) {
      function findTextBack() {
        alert("Для того, чтобы начать поиск, введите больше 3-х символов");
        document.body.innerHTML = locale_HTML;
      }
    } if (input.length >= 3) {
      function findTextGo() {
        search = "/" + input + "/g";
        pr = document.body.innerHTML;

        result = pr.match(/>(.*?)</g);
        result_arr = [];

        var warning = true;

        for (var i = 0; i < result.length; i++) {
          if (result[i].match(eval(search)) != null) {
            warning = false;
          } if (wrning == true) {
            alert("Совпадений не найдено!");
          }
        } for (var i = 0; i < result.length; i++) {
          result_arr[i] = result[i].replace(eval(search), "<span style=\"background: #4CAF50\">" + input + "</span>");
        } for (var i = 0; i < result.length; i++) {
          pr = pr.replace(result[i], result_arr[i]);
          {

        document.body.innerHTML = pr;
      }
    }

    function findTextBack() {
      document.body.innerHTML = locale_HTML;
    }

    if (status) {
      findTextBack();
      findTextGo();
    } if (!status) {
      findTextBack();
    }
  }
});

function closeDrawer() {
  document.getElementById("drawer").style.width = 0;
  document.getElementById("wrapper").style.marginLeft = 0;
}

function openDrawer() {
  document.getElementById("drawer").style.width = "250px";
  document.getElementById("wrapper").style.marginLeft = "250px";
}
