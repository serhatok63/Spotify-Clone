
var modal = document.getElementsByClassName("navmodal")[0];

var tog = document.getElementById("tog");

var close = document.getElementsByClassName("close")[0];

tog.addEventListener('click',function(){
  modal.style.display = "block";
})

close.addEventListener('click' ,function() {
  modal.style.display = "none";
})

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}