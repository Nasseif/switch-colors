// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
let btn =document.getElementById('btn');
let text =document.getElementById('text');
let signupbtn=document.getElementById('signupbtn');
let signupmoodlebtn =document.getElementById('signupmoodlebtn')
function changeColor(color){
    document.body.style.background=color;
    btn.style.background=color;
    text.style.borderColor=color;
    signupbtn.style.background=color;
    signupmoodlebtn.style.background=color;
    document.querySelectorAll('span').forEach(function (item){
        item.classList.remove('active')
    });
    event.target.classList.add('active');
}