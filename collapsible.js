function toggleDarkMode() {
    var element = document.body;
    if (element.classList.toggle("dark-mode")) {
        document.getElementById("dark-mode-button").innerHTML="Its too dark";
        localStorage.isDark = true;
    }
    else {
        document.getElementById("dark-mode-button").innerHTML="Its too bright";
        localStorage.isDark = false;
    } 
}
function setDarkModeToPrevious() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.isDark == true) {
        toggleDarkMode();
      } 
    } 
  }