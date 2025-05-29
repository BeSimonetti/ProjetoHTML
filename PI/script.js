    let index = 0;
    const slides = document.getElementById('slides');
    const totalSlides = slides.children.length;
    const slidesVisiveis = 4;
    const slideLargura = 300;

    function atualizarSlide() {
        const deslocamento = index * slideLargura;
        slides.style.transform = `translateX(-${deslocamento}px)`;
    }

    function avancar() {
        if (index < totalSlides - slidesVisiveis) {
        index++;
        atualizarSlide();
        }
    }

    function voltar() {
        if (index > 0) {
        index--;
        atualizarSlide();
        }
    }

    // Exemplo de ação ao clicar no botão "Adicionar ao carrinho"
    document.querySelectorAll('.botao-carrinho').forEach(botao => {
        botao.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho!');
        });
    });
