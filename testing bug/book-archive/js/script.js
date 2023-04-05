//------------- handle search button-----------
const searchBook = () => {
    const searchField = document.getElementById("search-input");
    const searchText = searchField.value;
    if(searchField.value === ""){
        document.getElementById("count-num").classList.add("d-none");
        searchField.value = "";
        alert("Write something else");
     }

    // ----------load data----------
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displaySearchResult(data.docs));
};

// ----------display search result data----------
const displaySearchResult = (myBooks) => {
    const searchResult = document.getElementById("search-result");
    searchResult.innerText = "";

    const books = myBooks.slice(0, 15);
    document.getElementById("count-num").classList.remove("d-none");
    document.getElementById("count").innerText = books.length;
    books.forEach((book) => {
        // console.log(book.first_publish_year);
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
        <div class="card">
            <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-50 mx-auto" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title"> Name: ${book.title}</h5>
              <h6> Author: ${book.author_name}</h6>
              <p>Publisher: <small> ${book.publisher ? book.publisher[0] : "no Publisher here"} </small></p>
              <small> First Published Year: ${book.first_publish_year === undefined ? "No date here" : book.first_publish_year}</small>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    });
};