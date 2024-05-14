
const Verificador = document.getElementById('Verify')

function Resultado()
{
    var Exibidor = window.document.getElementById('Exibidor')
    var TxtVel = window.document.getElementById('Velocimetro')
    var Velocidade = Number(TxtVel.value)

    if(Velocidade > 100)
        {
            Exibidor.innerText = 'Multado'
        }else if( Velocidade < 50)
            {
                Exibidor.innerText = 'Multado'
            } else
            {
                Exibidor.innerText = 'Sem multas!'
            }
}