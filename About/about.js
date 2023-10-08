function loadMessage() {
    var founder = document.getElementById("founderSection");

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                founder.innerHTML = this.responseText;
            }
            if (this.status == 404) {
                founder.innerHTML = "Page not found";
            }
        }
    }

    xhttp.open("GET", "./founderMsg.html", true);
    xhttp.send();
    return;
}

function loadMessage_1() {
    var founder = document.getElementById("seniorSection");

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                founder.innerHTML = this.responseText;
            }
            if (this.status == 404) {
                founder.innerHTML = "Page not found";
            }
        }
    }

    xhttp.open("GET", "./seniorMsg.html", true);
    xhttp.send();
    return;
}

function init(){
    loadMessage();
    loadMessage_1();
}

window.addEventListener("load", init);