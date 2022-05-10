
const calcular = () => {
    const numero1 = parseInt(document.getElementById('num1').value);
    const numero2 = parseInt(document.getElementById('num2').value);
    const corpoTela = document.getElementById('corpo');
    const seletor = document.getElementById("seletor").value;
    let resultado = 0    

    switch (seletor) {
        case 'somar':
            resultado = numero1 + numero2;
        break;
        case 'subtrair':
           resultado = numero1 - numero2;
        break;
        case 'dividir':
           resultado =  numero1/numero2;
        break;
        case 'multiplicar':
            resultado = numero1*numero2;
        break;
    }
    console.log(resultado)
    const elemento = document.createElement('p');
    elemento.innerText = ` O valor da operação é: ${resultado}`
  
    corpoTela.appendChild(elemento);

};




// function inserir (){
//     const paragrafo = document.createElement("p");
//     paragrafo.innerHTML = `
//     <p> O resultado é: ${seletor}</p>
//     `
// }