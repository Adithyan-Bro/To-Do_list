let field = document.getElementById('field');
let list= document.getElementById('list');
let error = document.getElementById('error');
let p = document.createElement("p")


function add(){
 
   if(field.value === ''){
    field.placeholder="write something first";
    p.innerHTML="write something first";
    error.appendChild(p);
   }else{ 
    field.placeholder="Add your task"
    p.innerHTML='';
 
    let li = document.createElement("li")
    li.innerHTML=field.value;
     list.appendChild(li);
     let span = document.createElement("span");
     span.innerHTML="\u00d7";
     li.appendChild(span);
 
  
}
    field.value='';
    saveData();
}
list.addEventListener("click",function(e){
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveData();
  }else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
},false);

function saveData(){
  localStorage.setItem("data",list.innerHTML)
}
function showTask(){
  list.innerHTML=localStorage.getItem("data");
}
showTask();