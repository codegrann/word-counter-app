let text=document.querySelector('#text');

text.addEventListener('input', updateCounter);

function updateCounter(e){
    let wordCount=document.querySelector('#words');
    let charCount=document.querySelector('#characters');
    let sentence=e.target.value;

    // regex to check for number of words
    // let regex=/(^\w+)|(\w+\S+)|(\s\w+)|(\s\W+)/g;
    let regex=/(\S+\b)/g;
    
    // updating word and character counter
    charCount.textContent=sentence.length;
    wordCount.textContent=regex.test(sentence)? sentence.match(regex).length:0;
}