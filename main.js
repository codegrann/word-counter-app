let text=document.querySelector('#text');
let wordCount=document.querySelector('#words');
let charCount=document.querySelector('characters');

text.addEventListener('input', updateCounter);

function updateCounter(e){
    let sentence=e.target.value;
    console.log(sentence);
}