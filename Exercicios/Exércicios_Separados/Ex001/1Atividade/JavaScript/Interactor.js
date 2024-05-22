function Carregar() {
    var Mensagem = document.getElementById('Msg');
    var Imagem = document.getElementById('Imagem');
    var Data = new Date();
    var Horario = Data.getHours();
    var Minutos = Data.getMinutes();
    var Hora = Number(Horario);

    Mensagem.innerHTML = `Agora são ${Hora} Horas e ${Minutos} Minutos!`;

    if (Hora >= 0 && Hora < 12)
    {
        Imagem.src = "../Images/Good_Morning.jpeg";
        document.body.style.backgroundColor = '#468ef6'
    }
    else if(Hora >= 12 && Hora < 18) 
    {
        Imagem.src = "../Images/Good_Afternoon.jpeg";
        document.body.style.backgroundColor = '#a5ff93'
    }
    else if (Hora >= 18 && Hora < 25)
    {
        Imagem.src = "../Images/Good_Night.jpg";
        document.body.style.backgroundColor = '#292929'
    }
}