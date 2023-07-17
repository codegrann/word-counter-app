let text=document.querySelector('#text');
let wordCount=document.querySelector('#words');
let charCount=document.querySelector('characters');

text.addEventListener('click', updateCounter);

function updateCounter(){
    text.style.backgroundColor='red';
    text.innerHTML='<p>Am clicked</p>';
}