const navtoggle=document.querySelector('.nav-toggle');
const links=document.querySelector('.links');
navtoggle.addEventListener('click',function(){
//   console.log(links.classList.contains('random'));
//   console.log(links.classList.contains('links'));
//first method
// if(links.classList.contains('show-links'))
// links.classList.remove('show-links')
// else
// links.classList.add('show-links');

//second method
links.classList.toggle('show-links');
})