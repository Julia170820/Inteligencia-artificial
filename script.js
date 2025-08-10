const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você mostra sua paixão no dia do Atletiba?",
        alternativas: [
            {
                texto: "Visto a camisa do meu time e vou para o estádio mostrar quem manda!",
                afirmacao: "Você é daqueles que sente a rivalidade na pele e vive o Atletiba intensamente."
            },
            {
                texto: "Fico em casa, dou aquela zoada nas redes sociais e acompanho de longe.",
                afirmacao: "Você prefere provocar na segurança do sofá, mas não perde nenhum lance do clássico."
            }
        ]
    },
    {
        enunciado: "O seu time marca gol nos primeiros minutos de Atletiba. O que você faz?",
        alternativas: [
            {
                texto: "Pulo e comemoro o gol como se fosse final de copa do mundo.",
                afirmacao: "Sua paixão pelo clássico é tão forte que contagia todos ao redor."
            },
            {
                texto: "Comemoro rápido e já fico atento à reação do rival.",
                afirmacao: "Você sabe que no Atletiba tudo pode mudar em segundos."
            }
        ]
    },
    {
        enunciado: "O rival empata com um gol polêmico no Atletiba. Qual sua reação?",
        alternativas: [
            {
                texto: "Reclamo com todo mundo e digo que o juiz está comprado.",
                afirmacao: "Você nunca aceita decisões injustas no jogo."
            },
            {
                texto: "Respiro fundo e espero o time reagir.",
                afirmacao: "Você mantém a cabeça fria mesmo nos momentos tensos do jogo."
            }
        ]
    },
    {
        enunciado: "Na arquibancada do Atletiba, você é...",
        alternativas: [
            {
                texto: "O que canta e grita o jogo inteiro.",
                afirmacao: "Você é a voz que empurra seu time no maior clássico do Paraná."
            },
            {
                texto: "O que observa e só explode nos lances decisivos.",
                afirmacao: "Você guarda energia para incendiar a torcida nos momentos certos."
            }
        ]
    },
    {
        enunciado: "O jogo termina e seu time vence. O que você faz primeiro?",
        alternativas: [
            {
                texto: "Procuro torcedores rivais para zoar sem piedade.",
                afirmacao: "Para você, ganhar o Atletiba é também um momento de provocação."
            },
            {
                texto: "Posto fotos e vídeos nas redes sociais comemorando.",
                afirmacao: "Você transforma o Atletiba em conteúdo para eternizar a vitória."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu perfil de torcedor do Atletiba é:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();