var Informar = window.document.getElementById('Informar')
Informar.addEventListener('click', Cumprimentar)

function Cumprimentar()
{
    var Fala = window.document.getElementById('Pessoa')
    var FalaHorario = window.document.getElementById('HorarioFalado')
    var Relogio = window.document.getElementById('Horario')
    var Horario = Number(Relogio.value)
        switch(Horario)
    {
        case 0: case 1: case 2: case 3: case 4: case 5: case 6:
            Fala.innerHTML = 'Bom madrugada!'
            FalaHorario.innerHTML = `O horário agora é <strong>${Horario}</strong>`
            break

        case 7: case 8: case 9: case 10: case 11: case 12:
            Fala.innerHTML = 'Boa dia!'
            FalaHorario.innerHTML = `O horário agora é <strong>${Horario}</strong>`
        break

        case 13: case 14: case 15: case 16: case 17: case 18:
            Fala.innerHTML = 'Boa tarde'
            FalaHorario.innerHTML = `O horário agora é <strong>${Horario}</strong>`
            break

        case 19: case 20: case 21: case 22: case 23: case 24:
            Fala.innerHTML = 'Boa noite!'
            FalaHorario.innerHTML = `O horário agora é <strong>${Horario}</strong>`
        break

        default:
            Fala.innerHTML = 'Comi o cu de quem tá lendo!'
            FalaHorario.innerHTML = `Fica querendo estragar meu código, tá desmerecendo né pae?`
            break
    }
}
//Código para ser esquecido!