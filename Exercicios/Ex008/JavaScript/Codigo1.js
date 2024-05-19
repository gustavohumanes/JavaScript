var Informar = window.document.getElementById('Informar')
Informar.addEventListener('click', Cumprimentar)


function Cumprimentar()
{
    var Fala = window.document.getElementById('Pessoa')
    var FalaHorario = window.document.getElementById('HorarioFalado')
    var Relogio = window.document.getElementById('Horario')
    var Horario = Number(Relogio.value)
    if(Horario > 24)
        {
            Fala.innerHTML = 'Comi o cu de quem tá lendo!'
        }

    else if(Horario <= 6)
        {
            Fala.innerHTML = 'Bom madrugada!'
            FalaHorario.innerHTML = `O horário agora é ${Horario}`
        }

    else if(Horario <=12)
        {
            Fala.innerHTML = 'Boa dia!'
            FalaHorario.innerHTML = `O horário agora é ${Horario}`
        }
        
    else if(Horario <= 18)
        {
            Fala.innerHTML = 'Boa tarde'
            FalaHorario.innerHTML = `O horário agora é ${Horario}`
        }

    else if(Horario >= 19)
        {
            Fala.innerHTML = 'Boa noite!'
            FalaHorario.innerHTML = `O horário agora é ${Horario}`
        }
}