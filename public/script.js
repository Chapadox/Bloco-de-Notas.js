const img = document.getElementById('#adicionar')
const fundo = document.getElementById('fundo')


function AdicionarNota() {
    const div = document.createElement('div');
    const nota = document.createElement('textarea');
    const Text  = document.createTextNode('Digite sua nota')

    //
    div.setAttribute('id','Nota1');
    nota.setAttribute('rows', '13');
    nota.setAttribute('cols', '37');
    nota.setAttribute('id','text');

    // variavel nota recebe text como filho, variavel div recebe nota com filho.
    nota.appendChild(Text)
    div.appendChild(nota)
    document.body.appendChild(div)
};

function deletaNota() {
    const audio = new Audio ('../audio/audio.mp3');
    audio.play();
}




