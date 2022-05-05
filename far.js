const icon = document.querySelector('.icon')
        const search = document.querySelector('.search');
        icon.onclick = function() {
            search.classList.toggle('active')
        }


function openPage() {
    var x = document.getElementById("mysearch").value;

    if (x === "naslovna") {
        window.open("/index.html");
    }

    if (x === "proizvodi") {
        window.open("/Proizvodi/index.html");
    }

}

