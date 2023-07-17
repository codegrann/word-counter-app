let text=document.querySelector('#text');

text.addEventListener('input', updateCounter);

function updateCounter(e){
    let wordCount=document.querySelector('#words');
    let charCount=document.querySelector('#characters');
    let sentence=e.target.value;
    let regex=/(^\w+)|(\w+\S+)|(\s\w+)|(\s\W+)/gi;
    charCount.textContent=sentence.length;
    wordCount.textContent=regex.test(sentence)? sentence.match(regex).length:0;

    console.log(sentence);
}