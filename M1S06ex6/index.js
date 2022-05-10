const fetchAPI = async (url, method) => {
    try{
        const response = await fetch(url, {method: method});

        if(!response.ok) {
            const err = await response.json();
            return console.log(`Ocorreu o seguinte erro: ${err.message}`);
        };
        return await response.json();
    }catch (e) {
        alert('Ocorreu um erro na solicitação, favor verificar os dados inseridos!');

    }   

};

const buscarEndereco = async () => {
    const Uf = document.getElementById('uf').value;

    if(!Uf){
        alert('Favor digitar uma UF');
        return;
    }

    if(Uf.length !== 2){
        alert('Favor preencher o campo UF corretamente');
        return;
    }

    const cidade = document.getElementById('cidade').value;

    if(!cidade){
        alert('Favor preencher o campo Cidade!');
        return;
    }

    const lograd = document.getElementById('logRua').value;

    if(!lograd){
        alert('Favor preencher o campo Rua!');
        return;
    }

    const response = await fetchAPI(`https://viacep.com.br/ws/${Uf}/${cidade}/${lograd}/json/`, "GET");
    console.log(response);

    if (response.length === 0) {
        const naoEncontrado = document.createElement("p");
        naoEncontrado.id = "resposta";
        naoEncontrado.innerText = `Nenhum CEP encontrado para o endereço: ${Uf}, ${cidade}, ${lograd}.`;
        const resposta = document.getElementById("resposta");
        resposta.replaceWith(naoEncontrado);
    } else {
        const tabela = document.createElement("table");
        const cabecalhoTabela = document.createElement("tr");
        const cabecalho = [
            "cep",
            "logradouro",
            "complemento",
            "bairro",
            "localidade",
            "uf",
            "ddd",
        ];
        cabecalho.forEach((item) => {
            const coluna = document.createElement("td");
            coluna.innerText = item.toUpperCase();
            cabecalhoTabela.appendChild(coluna);
        });
        tabela.appendChild(cabecalhoTabela);
        tabela.id = "resposta";

        response.forEach((item) => {
            const linha = document.createElement("tr");
            cabecalho.forEach((elemento) => {
                const coluna = document.createElement("td");
                coluna.innerText = item[elemento];
                linha.appendChild(coluna);
            });
            tabela.appendChild(linha);
        });

        const resposta = document.getElementById("resposta");
        resposta.replaceWith(tabela);
    }
};