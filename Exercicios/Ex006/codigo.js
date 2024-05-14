var Somador = window.document.getElementById('somar')
Somador.addEventListener('click', somar)

function somar()
{

    var valor1 = window.document.getElementById('N1')
    var valor2 = window.document.getElementById('N2')
    var res = window.document.getElementById('res')

    var n1 = Number(valor1.value)
    var n2 = Number(valor2.value)

    var Resultado = n1 + n2

    res.innerHTML = `${Resultado}`
}