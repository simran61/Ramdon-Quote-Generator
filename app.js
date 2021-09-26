const quoteText= document.querySelector('#quote-text');
const quoteTags= document.querySelector('#quote-tag');
const quoteAuthor= document.querySelector('#quote-author');
const genQuoteBtn= document.querySelector('#gen-quote-btn');

function randomQuote(){
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        quoteText.textContent= data.content;
        quoteTags.textContent= data.tags;
        quoteAuthor.textContent= `-- ${data.author}`
    })
}

randomQuote();

genQuoteBtn.addEventListener('click',randomQuote)