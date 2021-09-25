// BOTON HAMBURGER
function myFunction() {
    var x = document.getElementById("hamb");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}
// MODAL POPUP DESAPARECER
var modal = document.getElementById("myModal");
modal.onclick = function() {
        modal.style.display = "none";
    }
    // LISTADO DE ITEMS
var result = Array.from(document.getElementsByClassName('gallery__item'));
for (let index = 0; index < result.length; index++) {
    result[index].addEventListener("click", function() {
        show(index);
    }, true);
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
console.log(loading);
window.addEventListener("load", function() {
    loading.style.display = "none";
})

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