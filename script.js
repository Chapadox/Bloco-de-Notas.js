// selecionando Botões.
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');

//selecionando input.
const Notas = document.getElementById('Input-Notas')

//array para salvar as notas
let NotasSalvas =  ['']

function SalvarNota() {
    if (Notas.value == '' || Notas.value == ' ') {
        alert('Preencha o campo de notas');
        return;
    } else {
        // adicionando a nota ao array de notas salvas.
        NotasSalvas.push(Notas.value)
        alert('Nota salva');
    };
};

function Excluir() {
    NotasSalvas.length = 0
    alert('Nota excluida');
    Notas.value = ''
}



