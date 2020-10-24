function toggleDarkMode() {
    var element = document.body;
    if (element.classList.toggle("dark-mode")) {
        document.getElementById("dark-mode-button").innerHTML="It's too dark";
        localStorage.isDark = true;
        document.getElementById("linkedin").src="linkedin2.svg"
    }
    else {
        document.getElementById("dark-mode-button").innerHTML="It's too bright";
        localStorage.isDark = false;
        document.getElementById("linkedin").src="linkedin.svg"
    } 
}
function setDarkModeToPrevious() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.isDark == true) {
        toggleDarkMode();
      } 
    } 
  }
