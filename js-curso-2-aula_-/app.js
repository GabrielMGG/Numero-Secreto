let  listaDeNumeroSorteado = [];
let numeroLimite = 100;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function mensagemTextoNaTela()
{
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Digite um numero de 1 a 100');
}
mensagemTextoNaTela();



function verificarChute()
{
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto)
    {
        exibirTextoNaTela('h1', 'Voce acertou!');
        let diferençatentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Voce descobriu o numero secreto! Depois de ${tentativas} ${diferençatentativa} `;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }
    else
    {
        tentativas++;
        if(chute > numeroSecreto)
        {
            exibirTextoNaTela('p', 'O numero secreto e menor');
        }
        else
        {
            exibirTextoNaTela('p', 'O numero secreto e maior');
        }
        limparTela();
    }
}

function numeroAleatorio() 
{
   let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
   let quantidadeDeNumeroNaLista = listaDeNumeroSorteado.length;

   if(quantidadeDeNumeroNaLista == numeroLimite)
   {
    listaDeNumeroSorteado = [];
   }
   if(listaDeNumeroSorteado.includes(numeroEscolhido))
   {
     return numeroAleatorio();
   }
   else
   {
    listaDeNumeroSorteado.push(numeroEscolhido);
    console.log(listaDeNumeroSorteado);
    return numeroEscolhido;
   }
   
}

function limparTela()
{
   chute = document.querySelector('input');
   chute.value = '';
}

function reiniciarJogo()
{
    numeroSecreto = numeroAleatorio();
    limparTela();
    tentativas = 1;
    mensagemTextoNaTela();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


