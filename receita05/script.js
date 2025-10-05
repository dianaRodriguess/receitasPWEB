
let tsAlbums = ["DEBUT", "FLESS", "SNOW", "RED", "1989", "REP",
    "LOVER", "FOLK", "EVER", "NIGHTS", "TTPD", "TLOASG"]

// function carregarDiv() {
const carregarDiv = (cervs = []) => {
    const div = document.getElementById("meu amor")
    const tsAlbumsHtml = cervs.map(item => `<h1>${item}</h1>`)
    div.innerHTML = `${tsAlbumsHtml.join("\n")}`
}

// function carregarTabela(){
const carregarTabela = () => {
    let div = document.getElementById("meu amor");
    let html = `
        <table class="tabela">
            <tr><th>ALBUMS</th></tr>
            ${tsAlbums.map(item => `<tr><td>${item}</td></tr>`).join("")}
        </table>`;
    div.innerHTML = html;
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarDiv(tsAlbums))

let botaoOrdenar = document.getElementById("botaoOrdenar");
botaoOrdenar.addEventListener("click", () => {
    tsAlbums.sort();
    carregarTabela();
});

let botaoEmbaralhar = document.getElementById("botaoEmbaralhar");
botaoEmbaralhar.addEventListener("click", () => {
    tsAlbums.sort(() => Math.random() - 0.5);
    carregarTabela();
});

