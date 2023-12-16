const btn=document.getElementById('btn');   
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color=document.querySelector('.color');
btn.addEventListener('click',function(){
    let hexval='#';
    for(let i=0;i<6;i++){
        hexval+=hex[11];
    }
    color.textcontent=textColor;
    document.body.style=background=hexval;
})
function getRandomNumber()
{
    return Math.floor(Math.random*hex.length)
}