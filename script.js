let buttons = document.querySelectorAll('.buttons');
let mensagem = document.getElementById('mensagem');
let reiniciar = document.getElementById('Reiniciar');

let tabuleiro = ['','','','','','','','',''];
let player = 'X';
let jogo = true;

let vitoria = [[0,1,2],[3,4,5],[6,7,8],
               [0,3,6],[1,4,7],[2,5,8],
               [0,4,8],[2,4,6]];
               

function vitoriaOuEmpate(){
    for(let v of vitoria){
        const [a,b,c] = v;
    if(tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]){
        mensagem.textContent = `🏆Vencedor foi o jogador ${tabuleiro[a]}`;
        jogo = false;
    }
}
    if(!tabuleiro.includes('')){
        mensagem.textContent = 'Empate!'
        jogo = false;
    }
    
}


function clickNoTabuleiro(e){
    const index = e.target.dataset.b;

    if(tabuleiro[index] !== '' || !jogo) return;

    e.target.textContent = player;
     tabuleiro[index] = player

    vitoriaOuEmpate();

    if(jogo){
        player = player === 'X' ? 'O' : 'X';
        mensagem.textContent = `Vez de jogador ${player}`
    }
}


reiniciar.addEventListener('click', ()=>{
    tabuleiro = ['','','','','','','','',''];
    player = 'X';
    jogo = true;
    buttons.forEach((buttom)=>{buttom.textContent = ''});
    mensagem.textContent = 'Vez de jogador X'
})

buttons.forEach((buttom) =>{
    buttom.addEventListener('click', clickNoTabuleiro);
})