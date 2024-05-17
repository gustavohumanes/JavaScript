var Verificador = document.getElementById('Verify1')
Verificador.addEventListener('click', Resultado)

function Resultado()
{
    var Exibidor = window.document.getElementById('Exibidor1')
    var TxtVel = window.document.getElementById('Velocimetro')
    var Velocidade = Number(TxtVel.value)

    if(Velocidade > 300)
        {
            Exibidor.innerText = 'RANDADANDANDANDANDANDANDANDANDANDANDAN VRUUUUUUUUUUUMMMMMM VRUUUUUUUMMMMM'
        }
    else if(Velocidade > 180)
        {
            Exibidor.innerText = 'DIMINUE AE CARALHO'
        }
    else if(Velocidade > 100)
        {
            Exibidor.innerText = 'Multado'
        }
    else if( Velocidade < 50)
        {
            Exibidor.innerText = 'Multado'
        }
    else
        {
            Exibidor.innerText = 'Sem multas!'
        }
}