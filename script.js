let tabuleiro = document.querySelectorAll('[data-button]');
let mensagem = document.querySelector('.mensagem');
let pontosPlayerX = document.querySelector('.pontosX');
let pontosPlayerO = document.querySelector('.pontosO');
let resultado = document.querySelector('.VitoriaOuEmpate');
let textResultado = document.querySelector('.resultado');

let pontosO = 0;
let pontosX = 0;
let jogo = true;
let player = 'X';
let espacos = ['', '', '', '', '', '', '', '', ''];
let vitorias = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
[0, 3, 6], [1, 4, 7], [2, 5, 8],
[0, 4, 8], [2, 4, 6]];


function clickNoButton(event) {
    let button = event.target;
    let index = [...tabuleiro].indexOf(button)

    if (espacos[index] !== '' || !jogo) return;

    button.textContent = player;
    button = button.textContent === 'X' ? button.style.color = 'red' : button.style.color = 'blue';
    espacos[index] = player;

    vitoriaEmpate();


    if(jogo){
    player = player === 'X' ? 'O' : 'X';
    mensagem.textContent = `Vez Do Jogador ${player}`
    }    
}   


function vitoriaEmpate() {
    for (let vitoria of vitorias) {
        let [a,b,c] = vitoria;

        if (espacos[a] && espacos[a] === espacos[b] && espacos[a] === espacos[c]) {
            textResultado.textContent = `Vitoria Do Jogador ${espacos[a]} `;
            resultado.style.display = 'block';
            document.querySelector('.estatistica').textContent = '🏆';
            jogo = false;
            if(espacos[a] === 'X'){
                pontosX++;
                pontosPlayerX.textContent = pontosX;
            }else{
                pontosO++;
                pontosPlayerO.textContent = pontosO;}
            return;
        }
    }
    if(!espacos.includes('')){
        textResultado.textContent = 'Empate';
        resultado.style.display = 'block';
        document.querySelector('.estatistica').textContent = '🥺'
        jogo = false;
    }
}



tabuleiro.forEach((button) => {
    button.addEventListener('click', clickNoButton);
})

document.querySelector('.reiniciar').addEventListener('click', ()=>{
    tabuleiro.forEach((button) =>{button.textContent = ''})
    jogo = true;
    player = 'X';
    espacos = ['', '', '', '', '', '', '', '', ''];
    mensagem.textContent = 'Vez Do Jogador X';
    resultado.style.display = 'none';
});
