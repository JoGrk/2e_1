const pictures = [
    'https://cdn.galleries.smcloud.net/t/galleries/gf-Qd4C-hUbw-xAu4_pierwszy-dzien-wiosny-1-marca-to-meteorologiczna-wiosna-przed-nami-jeszcze-cztery-1920x1080-nocrop.jpg' ,
    'https://cdn.galleries.smcloud.net/t/galleries/gf-sX2c-H6ec-5J2i_wiosna-1920x1080-nocrop.jpg' ,
    'https://d-art.ppstatic.pl/kadry/k/r/1/26/e9/5e1ef46403c02_o_medium.jpg' ,
    'https://ocdn.eu/pulscms-transforms/1/UhMk9kpTURBXy8wNjJjZTJmMjNlYjQzYWJmYjBjMDFlOTVlNjYxNDcwOC5qcGeTlQMAzIzNEZTNCeOTCaZjNmNiOGIGkwXNBLDNAnbeAAGhMAE/pierwszy-dzien-kalendarzowej-wiosny-kiedy-wypada-co-warto-wiedziec.jpg'
]

const btnPic = document.getElementById('btnPic')
const imgPic = document.getElementById('imgPic')

function genereRandom (max){
    return Math.floor(Math.random()*max)
}

function generePic(){
    const max = pictures.length
    let index = genereRandom(max)
    imgPic.src = pictures[index]
}

btnPic.addEventListener('click', generePic)