
let cervejas = ["Guinness", "Desperados", "Becks"];

function transformar(item){
    return `<div class="cerveja">${item}</div>`;
}

function carregarDiv(){
    let div = document.getElementById("meu amor");
    let cervejasHtml = cervejas.map(transformar);
    div.innerHTML = cervejasHtml.join("\n");
}

function carregarTabela(){
    let div = document.getElementById("meu amor");
    let html = `
        <table class="tabela">
            <tr><th>Cerveja</th></tr>
            ${cervejas.map(item => `<tr><td>${item}</td></tr>`).join("")}
        </table>
    `;
    div.innerHTML = html;
}

let botao = document.getElementById("botaoCarregar");
botao.addEventListener("click", carregarDiv);

let botaoOrdenar = document.getElementById("botaoOrdenar");
botaoOrdenar.addEventListener("click", function(){
    cervejas.sort();
    carregarTabela();
});

let botaoEmbaralhar = document.getElementById("botaoEmbaralhar");
botaoEmbaralhar.addEventListener("click", function(){
    cervejas.sort(() => Math.random() - 0.5);
    carregarTabela();
});
