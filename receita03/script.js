
let botao = document.querySelector(".botaoCarregar");
let divCerveja = document.querySelector(".divCerveja");

let visivel = false;

botao.addEventListener("click", function () {
    if (!visivel) {

        divCerveja.innerHTML = "<h1>Guinness</h1>";
        divCerveja.classList.add("show");
        visivel = true;
    } else {

        divCerveja.classList.remove("show");

        setTimeout(() => {
            divCerveja.innerHTML = "";
        }, 1000);
        visivel = false;
    }
});
