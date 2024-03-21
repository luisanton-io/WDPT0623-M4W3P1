const SEARCH_URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

// Il risultato che vogliamo ottenere in questo contesto è:

// 1. l'utente digita una stringa di ricerca
// 2. l'utente conferma premendo il tasto di ricerca
function search() {
    // una funzione che gestisce la ricerca

    // 1. recuperiamo la stringa di ricerca
    const inputValue = document.querySelector("#searchField").value

    // 2. effettuare la chiamata al server

    // const promessa = fetch(SEARCH_URL + inputValue
    fetch(SEARCH_URL + inputValue)
        // 3. gestiamo la risposta
        .then(r => r.json())
        .then(function (body) {
            // qui finalmente troviamo il body della risposta...
            showResults(body.data)
        })

    // LocalStorage: getItem per recuperare i dati dal localStorage, setItem per salvare i dati nel localStorage

    // 4. salviamo questa ricerca nell'elenco di ricerche recenti

    // decodifichiamo da stringa ad array la lista di ricerche recenti

    // const recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || []
    // recentSearches.push(inputValue)
    // localStorage.setItem("recentSearches", JSON.stringify(recentSearches))

    let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) // ma potrebbe essere null...

    if (recentSearches === null) {
        recentSearches = [inputValue]
    } else {
        recentSearches.push(inputValue)
    }

    localStorage.setItem("recentSearches", JSON.stringify(recentSearches))

    showRecentSearches(recentSearches)

}

// 3. mostriamo all'utente i risultati della ricerca
function showResults(results) {
    console.log(results)

    const container = document.querySelector("#searchResultsContainer")

    container.innerHTML = results
        .map(result => /*html*/`
        <div class="card bg-transparent">
            <a href="/album.html?id=${result.album.id}">
                <img src="${result.album.cover_big}" class="card-img-top" alt="...">
            </a>    
            <div class="card-body">
                <h5 class="card-title">${result.title}</h5>
                <a href="/artist.html?id=${result.artist.id}">
                    <span>${result.artist.name}</span>
                </a>
            </div>
        </div>
        `)
        .join("")

}

function showRecentSearches(recentSearches) {
    const recentSearchesContainer = document.querySelector("#recent")

    recentSearchesContainer.innerHTML = recentSearches
        .map(recentSearch => /*html*/`
        <li class="card bg-transparent">
            ${recentSearch}
        </li>
        `)
        .join("")
}

// 4. l'utente può navigare in una pagina di dettaglio che mostra i dettagli di un album

