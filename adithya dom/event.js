var inp = document.getElementById("inp");
function changecolor(){
    inp.style.backgroundColor="red"
}
function hide(){
    inp.style.backgroundColor="white"
}
 function popup()
{
    alert(" button clicked");
}
var btn=document.getElementById("btn1");
btn.addEventListener("click",function(){
    alert("event listner worked!!!")
})