
async function pegarCafes(api) {

    try {
        let res = await fetch(api);

        if (!res.ok) {
            throw new Error("Erro na requisição: " + res.status);
        }
        return await res.json();
    } catch (err) {
        console.error("Erro ao buscar dados:", err);
        return null;
    }
}

function fazerTabela(dados, divID = "resultadoDiv",
    cabecalhos = ["Nome", "Descrição", "Ingredientes", "Imagem"],
    propriedades = ["title", "description", "ingredients", "image"]
) {
    const div = document.getElementById(divID)
    if (!dados || dados === 0) {
        div.innerHTML = "<h2>Não tem nada aqui.</h2>"
    }

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const trHead = document.createElement("tr");
    cabecalhos.forEach(cab => {
        const th = document.createElement("th");
        th.textContent = cab;
        trHead.appendChild(th);
    });
    thead.appendChild(trHead);

    dados.forEach(item => {
        const tr = document.createElement("tr");
        propriedades.forEach(p => {
            const td = document.createElement("td");
            let valor = item[p];

            if (Array.isArray(valor)) valor = valor.join(", ");
            if (typeof valor === "string" && valor.startsWith("http")) {
                const img = document.createElement("img");
                img.src = valor;
                img.alt = "imagem";
                img.className = "tabela-imgs";
                td.appendChild(img);
            } else {
                td.textContent = valor ?? "";
            }

            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    div.appendChild(table);
}

async function criarTabela() {
    let api = "https://api.sampleapis.com/coffee/hot";
    let cafes = await pegarCafes(api);

    if (!cafes) {

        document.getElementById("cafesDiv").innerHTML = "Erro ao carregar cafés";
        return;
    }

    let cabecalhos = ["Nome", "Descrição", "Ingredientes", "Imagem"];
    let propriedades = ["title", "description", "ingredients", "image"];

    fazerTabela(cafes, "cafesDiv", cabecalhos, propriedades);
}

let botao = document.getElementById("botaoCarregar");
botao.addEventListener("click", async () => await criarTabela());
