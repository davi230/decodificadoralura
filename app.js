function criptografar(text) {
    let chaveDeEntrada = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    return text.toLowerCase().split('').map(char => chaveDeEntrada[char] || char).join('');
}

function descriptografar(text) {
    let chaveDeSaida = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    return text.replace(/enter|imes|ai|ober|ufat/g, match => chaveDeSaida[match]);
}

function opcao(operacao) {
    let texto = document.getElementsByClassName('decodificador__texto__digitar')[0].value;
    let resultado = document.getElementById('result');

    if (operacao === 'criptografar') {
        resultado.textContent = criptografar(texto);
    } else if (operacao === 'descriptografar') {
        resultado.textContent = descriptografar(texto);
    }
}

// Função para copiar para a área de transferência
function copiarTexto() {
    let resultado = document.getElementById('result');
    let textArea = document.createElement('textarea');
    textArea.value = resultado.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Texto copiado para a área de transferência!');
}

function atualizarElementos() {
    // Obter o elemento da textarea
    let textareaElemento = document.querySelector('textarea');
    
    // Obter os elementos a serem ocultados/mostrados
    let imgElemento = document.querySelector('.decodificador__apresentacao__info img');
    let h2Elemento = document.querySelector('.decodificador__apresentacao__titulo');
    let pElemento = document.querySelector('.decodificador__apresentacao__texto');
    let pTraduzido = document.querySelector('.decodificador__apresentacao__traduzido')

    // Verificar se o elemento está presente
    if (textareaElemento) {
        // Verificar se o conteúdo da textarea está vazio
        if (textareaElemento.value.trim() === '') {
            // Se estiver vazio, mostrar os elementos
            pTraduzido.textContent = '';
            mostrarElementos(imgElemento, h2Elemento, pElemento);
        } else {
            // Se houver conteúdo, esconder os elementos
            esconderElementos(imgElemento, h2Elemento, pElemento);
        }
    } else {
        console.log('Elemento textarea não encontrado.');
    }
}

function mostrarElementos(...elementos) {
    // Exibir os elementos passados como argumento
    elementos.forEach(elemento => {
        elemento.style.visibility = 'visible';
    });
}

function esconderElementos(...elementos) {
    // Ocultar os elementos passados como argumento
    elementos.forEach(elemento => {
        elemento.style.visibility = 'hidden';
    });
}

// Chamar a função ao inicializar e sempre que o conteúdo do textarea for alterado
document.querySelector('textarea').addEventListener('input', atualizarElementos);