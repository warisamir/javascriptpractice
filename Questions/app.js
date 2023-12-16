const btns=document.querySelectorAll('.question-btn');
const currentquestion=0;
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
       const par=e.currentTarget.parentElement.parentElement;
       console.log(par);
       par.classList.toggle('show-text')
    })
})