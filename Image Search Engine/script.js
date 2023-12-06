let searchForm = document.getElementById("search-form");
let searchBox = document.getElementById("search-box");
let searchButton = document.getElementById("search-button");
let searchResult = document.getElementById("search-result");
let showBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;
let accessKey = `WwuM5rlw5lDPQb-tOBr4TX8hdhMUsTxXdp5xOhROi4Q`;

async function searchImage()
{
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=9`;

    let response = await fetch(url);
    let data = await response.json();

    let results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });

    showBtn.style.display = "block";
}

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    page = 1;
    searchResult.innerHTML = "";
    searchImage();
})

showBtn.addEventListener('click', () => {
    page++;
    searchImage();
})
