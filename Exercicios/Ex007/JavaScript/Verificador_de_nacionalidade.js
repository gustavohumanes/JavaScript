

var Verificador = window.document.getElementById('Verify2')
Verificador.addEventListener('click', Verificar)  //botão para Verificar


function Verificar() { // função para verificar
    var Pais = window.document.getElementById('Nacionalidade').value; // Variável que carrega o valor da nacionalidade
    var Exibidor = window.document.getElementById('Exibidor2'); //div para brasileiro ou estrangeiro

    if (Pais.toLowerCase() === 'brasil') // condições para verificar se é brasileiro
    {
        Exibidor.innerHTML = 'Você é Brasileiro!'; // Implementação do texto
    }
    else
    {
        Exibidor.innerHTML = `Você é não é Brasileiro, logo não pode podemos te ajudar.`;
    }
}