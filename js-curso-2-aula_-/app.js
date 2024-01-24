let  listaDeNumeroSorteado = [];
let numeroLimite = 1000;
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
    exibirTextoNaTela('p', 'Digite um numero de 1 a 1000');
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
        document.getElementById('chute').setAttribute('disabled', true);
        
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
        if(tentativas == 30)
        {
            exibirTextoNaTela('p', `Acredito que nem na sua proxima rencarnação voce acertara o numero secreto, este e o numero secreto ${numeroSecreto}`)
        }
        else if(tentativas == 40)
        {
            exibirTextoNaTela('p', `Se voce chegou ate aqui, feche seu navegador e nao teste mais sua inteligencia, este e o numero secreto ${numeroSecreto}, caso nao entendeu e so digitar esse numero que voce ganha.`)
        }
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
    document.getElementById('chute').removeAttribute('disabled');
}


