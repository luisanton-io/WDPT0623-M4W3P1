// window.onload = () => {

//     const searchParams = new URLSearchParams(window.location.search)
//     const albumId = searchParams.get('id')

//     fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId)
//         .then(r => r.json())
//         .then(body => {
//             console.log(body)
//             showAlbumData(body)
//         })
// }

window.onload = async () => {

    const searchParams = new URLSearchParams(window.location.search)
    const albumId = searchParams.get('id')

    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId)
        const body = await response.json()

        showAlbumData(body)
    } catch (error) {
        console.log(error)
    }

}

// async function randomNumber() {
//     const number = await new Promise(resolve => {
//         setTimeout(() => {
//             resolve(Math.random())
//         }, 1000)
//     })
//     return number
// }
//
// randomNumber().then(console.log)

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