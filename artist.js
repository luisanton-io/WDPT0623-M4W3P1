const ARTIST_ENDPOINT_URL = "https://striveschool-api.herokuapp.com/api/deezer/artist/"
const searchParams = new URLSearchParams(location.search)
const artistId = searchParams.get('id')

console.table({ artistId })

window.onload = async () => {
    const url = ARTIST_ENDPOINT_URL + String(artistId)

    const response = await fetch(url)
    const data = await response.json()

    console.log(data)

    // possiamo mostrare nel nostro documento i dati presenti nella risposta,
    // utilizzando DOM manipulation come siamo soliti fare

    showArtistData(data)

}

function showArtistData(data) {
    const artistName = document.querySelector("#artist-name")
    artistName.innerHTML = data.name
}