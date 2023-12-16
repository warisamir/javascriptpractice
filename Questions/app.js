// const btns=document.querySelectorAll('.question-btn');
// const currentquestion=0;
// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//        const par=e.currentTarget.parentElement.parentElement;
//        console.log(par);
//        par.classList.toggle('show-text')
//     })
// })

//using selectors inside the element

const ques=document.querySelectorAll(".question");
ques.forEach(function(que){
    const btn=que.querySelector(".question-btn");
    btn.addEventListener("click",function(){
    ques.forEach(function(i){
      if(i!==que){
      i.classList.remove('show-text');}
    })
     que.classList.toggle('show-text');
   })
})
