const fetchAPI = async (url, method) => {
    const response = await fetch(url, {method: method});

    if (!response.ok){
        const err = await response.json();
        return console.log('Ocorreu o seguinte erro:', err.message);
    };
    return await response.json();
};

const buscaCep = async () => {
    const Cep = document.getElementById('input').value;

    if (!Cep){
        alert("Digite um CEP.")
        return;
    }

    if(Cep.length !== 8){
        alert("Favor digitar um CEP válido")
        return;
    }
    const reponse = await fetchAPI(`https://viacep.com.br/ws/${Cep}/json`, "GET");
    console.log(reponse);

    if(reponse.erro){
        alert("Não foi possível consultar o CEP digitado")
        return;
    }

    const enderecoTela = document.createElement("p");
    enderecoTela.innerText = `${reponse.logradouro}, ${reponse.complemento ? `${reponse.complemento} - ` : ""}${reponse.bairro} - ${reponse.localidade}/${reponse.uf}`;
    document.body.appendChild(enderecoTela);
}   