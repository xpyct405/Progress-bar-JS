document.querySelector('button').addEventListener('click', function() {

    let progressBar = document.querySelector(".progress-bar");
    let width = 10;
    let statusBar = setInterval(fill, 10);

    function fill() {
      if (width >= 100) {
        clearInterval(statusBar);
      } else {
        width++;
        progressBar.style.width = width + "%";
        progressBar.innerHTML = width  + "%";
      }
    }
})
