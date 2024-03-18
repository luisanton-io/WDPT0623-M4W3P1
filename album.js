window.onload = () => {

    const searchParams = new URLSearchParams(window.location.search)
    const albumId = searchParams.get('id')

    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId)
        .then(r => r.json())
        .then(body => {
            console.log(body)
            showAlbumData(body)
        })
}


function showAlbumData({ artist, cover_big, tracks }) {
    const albumHeader = document.querySelector("#album-header")
    const albumTracklist = document.querySelector("#album-tracklist")

    albumHeader.innerHTML = /*html*/`
        <img class="img-fluid" src=${cover_big}>
        <h4 class="text-white">${artist.name}</h4>
    `

    albumTracklist.innerHTML = tracks.data.map(track => /*html*/`
        <li class="text-white">
            ${track.title}
        </li>
    `).join("")

}