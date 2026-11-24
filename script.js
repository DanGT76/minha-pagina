
let pontosJogador = 0;
let pontosComputador = 0;

const opcoes = ["pedra", "papel", "tesoura"];

const emojis = {
    pedra: "✊",
    papel: "✋",
    tesoura: "✌️"
};

function jogar(escolhaJogador) {

    // Computador escolhe aleatoriamente
    const escolhaComputador =
        opcoes[Math.floor(Math.random() * opcoes.length)];

    let mensagem = "";

    // Verifica o resultado
    if (escolhaJogador === escolhaComputador) {
        mensagem = "Empate!";

    } else if (
        (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
        (escolhaJogador === "tesoura" && escolhaComputador === "papel")
    ) {
        mensagem = "Você venceu!";
        pontosJogador++;

    } else {
        mensagem = "Você perdeu!";
        pontosComputador++;
    }

    // Atualiza a tela
    document.getElementById("mensagem").textContent = mensagem;

    document.getElementById("escolha-jogador").textContent =
        emojis[escolhaJogador];

    document.getElementById("escolha-computador").textContent =
        emojis[escolhaComputador];

    document.getElementById("pontos-jogador").textContent =
        pontosJogador;

    document.getElementById("pontos-computador").textContent =
        pontosComputador;
}

// Reinicia o jogo
function reiniciarJogo() {

    pontosJogador = 0;
    pontosComputador = 0;

    document.getElementById("pontos-jogador").textContent = 0;
    document.getElementById("pontos-computador").textContent = 0;

    document.getElementById("mensagem").textContent =
        "Faça sua escolha para começar!";

    document.getElementById("escolha-jogador").textContent = "❔";
    document.getElementById("escolha-computador").textContent = "❔";
}
