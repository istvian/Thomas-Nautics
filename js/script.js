function myFunction() {
    var x = document.getElementById("hamb");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}
var modal = document.getElementById("myModal");
modal.onclick = function() {
        modal.style.display = "none";
    }
    /*
    function pop(file, text) {
        var img = document.getElementById("popImg");
        var caption = document.getElementById("caption");
        modal.style.display = "block";
        img.src = 'img/photos/' + file + '.jpg';
        caption.innerHTML = text;
    }*/
    // function pop(number) {
    //     console.log(`item${number}`);
    //     var item = document.getElementById(`item${number}`);
    //     var img = document.getElementById("popImg");
    //     var caption = document.getElementById("caption");
    //     modal.style.display = "block";
    //     console.log(item.children[0].children[0].getAttribute("src"));
    //     // img.src = `${item.children[0].children.getAttribute("src")}`;
    //     caption.innerHTML = item.parentElement.childNodes[1].innerHTML;
    // }

var result = Array.from(document.getElementsByClassName('gallery__item'));

for (let index = 0; index < result.length; index++) {
    result[index].addEventListener("click", function() {
        show(index);
    }, true);
}

function show(id) {
    var img = document.getElementById("popImg");
    var caption = document.getElementById("caption");
    modal.style.display = "flex";
    img.src = `${result[id].children[0].getAttribute("src")}`;
    caption.innerHTML = result[id].children[1].innerHTML;
}