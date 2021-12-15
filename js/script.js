// Escoge el video de fondo
let video = document.getElementById("video");
onResize();

function onResize() {
    if (window.innerWidth < 600) {
        video["src"] = "https://github.com/istvian/Thomas-Nautics/blob/master/video/hd.mp4?raw=true";

    } else {
        video["src"] = "https://github.com/istvian/Thomas-Nautics/blob/master/video/fhd.mp4?raw=true";
    }
}
video.onloadeddata =()=>{
    loading.style.display = "none";
};


// MODAL POPUP DESAPARECER
var modal = document.getElementById("myModal");
var catalogo = document.getElementById("catalogo");
var close = document.getElementById("closer");
close.onclick = function() {
        modal.style.display = "none";
    }
    // LISTADO DE ITEMS
var result = Array.from(document.getElementsByClassName('gallery__item'));
for (let index = 0; index < result.length; index++) {
    result[index].addEventListener("click", function() {
        show(index);
    }, true);
}
catalogo.addEventListener("click", function() {
    showCatalogo();
});

function showCatalogo() {
    var img = document.getElementById("popImg");
    var caption = document.getElementById("caption");
    modal.style.display = "flex";
    img.src = `${catalogo.children[0].getAttribute("src")}`;
    caption.innerHTML = catalogo.children[2].innerHTML;
}
// MOSTRAR POPUP
function show(id) {
    var img = document.getElementById("popImg");
    var caption = document.getElementById("caption");
    modal.style.display = "flex";
    img.src = `${result[id].children[0].getAttribute("src")}`;
    caption.innerHTML = result[id].children[1].innerHTML;
}

// LOADING
let loading = document.querySelector(".loader");
// window.addEventListener("load", function() {
    // loading.style.display = "none";
// })

const checkpoint = 300;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 0 + currentScroll / checkpoint;
    } else {
        opacity = 1;
    }
    document.querySelector(".upArrow").style.opacity = opacity;
});