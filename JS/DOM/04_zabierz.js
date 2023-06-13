const linkElement=document.getElementById("link")
let links = [
   'https://www.wp.pl/',
   'https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna',
   'https://www.youtube.com/'
]
linkElement.addEventListener('click', ()=>{
    linkElement.href=links[genereRandom(links.length)]
})