
let cervejas = [
    {
        name: "Guiness",
        alcohol: "10%",
        ibu: "13",
        style: "Red Ale"
    },
    {
        name: "Desperados",
        alcohol: "6%",
        ibu: "23",
        style: "Cream Ale"
    },
    {
        name: "Becks",
        alcohol: "5%",
        ibu: "25",
        style: "English IPA"
    }
]

const carregarDiv = (
    cs,
    id = "cervejasDiv",
    cabecalhos = ["Nome", "Álcool", "Estilo", "Amargor"],
    propriedades = ["name", "alcohol", "style", "ibu"]
) => {
    let div = document.getElementById(id);
    let cervejasHtml = `
        <table class="tabela">
            <tr>
                ${cabecalhos.map(cabeca => `<th>${cabeca}</th>`).join("")}
            </tr>
            ${cs.map(item => `
                <tr>
                    ${propriedades.map(propri => `<td>${item[propri] ?? ""}</td>`).join("")}
                </tr>`
            ).join("")}
        </table>`;
    div.innerHTML = cervejasHtml;
}

let botao = document.getElementById("botaoCarregar");
botao.addEventListener("click", () => carregarDiv(cervejas));
