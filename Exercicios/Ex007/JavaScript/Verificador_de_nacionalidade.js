

var Verificador = window.document.getElementById('Verify2')
Verificador.addEventListener('click', Verificar)  //botão para Verificar


function Verificar() //função para verificar
{
    var Pais = window.document.getElementById('Nacionalidade').value //Váriavel que carrega o valor da nacionaliade.

    var Exibidor = window.document.getElementById('Exibidor2') //Div na qual vamos colocar o texto dizendo se é brasileiro ou esquisito!

    if (Pais == 'Brasil' || 'brasil') // condições para verificar se é brasileiro
        {
            Exibidor.innerHTML = `Você é Brasileiro!` //Implementação do texto
        }

    if (Pais != 'Brasil' || 'brasil') // condições para verificar se não é brasileiro
        {
            Exibidor.innerHTML = `Você é Esquisito!!` //Implementação do texto
        }
}