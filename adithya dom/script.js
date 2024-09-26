var hd=document.getElementById("head1");
hd.style.color="blue"
//hd.innerText="text changed";
hd.innerHTML='<p>changed into p tag</p>'

//uing class name
var list=document.getElementsByClassName("user");
for(let i=0;i<list.length;i++){
    list[i].style.color="red"
}
//using tag name
var tag1 = document.getElementsByTagName("li");
tag1[2].style.backgroundColor="yellow";
 
//using query selector
var inp = document.querySelector('input');
inp.placeholder="pling!!"
 
//queryselector using classname
var qclass= document.querySelector(".qclass");
qclass.style.backgroundColor="green"
  

//query selctor using id

var btn = document.querySelector("#qid");
btn.innerText="changed"