let text=document.querySelector('#text');

text.addEventListener('input', updateCounter);

function updateCounter(e){
    let wordCount=document.querySelector('#words');
    let charCount=document.querySelector('#characters');
    let sentence=e.target.value;
    charCount.textContent=sentence.length;

    console.log(sentence);
}