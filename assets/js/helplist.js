var h3 = document.getElementsByClassName("listh3");
var i;
function myFunction(x) {
  if (x.matches) {
    for (i = 0; i < h3.length; i++) {
      h3[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var list = this.nextElementSibling;
        var span=this.lastElementChild;
        var caret=span.firstElementChild;
        if (list.style.display === "block") {
          list.style.display = "none";
          caret.classList.remove("fa-caret-up");
          caret.classList.add("fa-caret-down");
        } else {
          list.style.display = "block";
          caret.classList.remove("fa-caret-down");
          caret.classList.add("fa-caret-up");
        }
      });
    }
  }
}
var x = window.matchMedia("(max-width: 992px)");
myFunction(x);
x.addListener(myFunction);
