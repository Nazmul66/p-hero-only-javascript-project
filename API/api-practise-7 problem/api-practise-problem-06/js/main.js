

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/hello';
fetch(url).then(res => res.json()).then(data => dataFile(data));


const dataFile = data =>{
    console.log(data[0]);
    const divCreate = document.getElementById("div-create");
    const create = document.createElement("div");
    create.classList.add("middle-section","p-4");
    create.innerHTML = `
        <div class="two-col">
            <h1>${data[0].word}</h1>
            <p>${data[0].phonetic}</p>
        </div>
        <span class="mb-4 d-block">noun</span>
        <code class="d-block mb-1">Meaning</code>
        <ul>
            <li>${data[0].meanings[0].definitions[0].definition}</li>
            <li>${data[0].meanings[0].definitions[1].definition}</li>
            <li>${data[0].meanings[0].definitions[2].definition}</li>
        </ul>
        <p class="mb-4">synonyms: ${data[0].meanings[0].synonyms[0]}</p>
        <h3 class="">verb</h3>
        <code class="d-block mb-1">Meaning</code>
        <ul class="mb-3">
            <li>${data[0].meanings[1].definitions[0].definition}</li>
            <li>${data[0].meanings[1].definitions[0].example}</li>
        </ul>
        <span class="d-block">sources: ${data[0].sourceUrls[0]}</span>
    `;
    divCreate.appendChild(create);
}