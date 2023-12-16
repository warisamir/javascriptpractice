let count=0;
const value=document.querySelector('#value')

const btn =document.querySelectorAll('.btn');
btn.forEach(function(item){
item.addEventListener("click",function(e){
  const style= e.currentTarget.classList;
  if(style.contains('decrease')){
    count--;
  }
  if(style.contains('increase')){
    count++;
  }
  if(style.contains('reset')){
    count=0;
  }
  if(count>0){
    value.style="color:green";
  }
  if(count<0){
    value.style="color:red";
  }
  if(count===0){
    value.style="color:black";
  }
  value.textContent=count;
})
})


console.log(btn)



