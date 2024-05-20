const Informar = document.getElementById('Informar');
Informar.addEventListener('click', Cumprimentar);

function Cumprimentar() {
    const Fala = document.getElementById('Pessoa');
    const FalaHorario = document.getElementById('HorarioFalado');
    const Horario = Number(document.getElementById('Horario').value);
    
    var saudacao;
    if (Horario <= 6) saudacao = 'Bom madrugada!';
    else if (Horario <= 12) saudacao = 'Bom dia!';
    else if (Horario <= 18) saudacao = 'Boa tarde!';
    else if (Horario <= 24) saudacao = 'Boa noite!';
    else saudacao = 'Comi o cu de quem tá lendo!';

    Fala.innerHTML = saudacao;
    FalaHorario.innerHTML = Horario >= 0 && Horario <= 24
        ? `O horário agora é <strong>${Horario}</strong>`
        : `Fica querendo estragar meu código, tá desmerecendo né pae?`;
}
//Código para ser lembrado!