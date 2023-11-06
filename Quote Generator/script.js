let apiURL = "https://api.quotable.io/random";
let quote = document.querySelector('#quote');
let author = document.querySelector('#author');

async function newQuote(url)
{
    let response = await fetch(url);
    let data = await response.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

function tweet()
{
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " ---- by " + author.innerHTML, "New tweet", "height=300", "width=600");
}
