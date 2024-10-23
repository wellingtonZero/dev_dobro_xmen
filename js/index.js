const canvas = document.getElementById('riveCanvas');
        const ctx = canvas.getContext('2d');

        const setCanvasResolution = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        };
        setCanvasResolution();

        let riveInstance;

        const loadRiveAnimation = (fileName) => {
            if (riveInstance) {
                riveInstance.cleanup();
            }

            riveInstance = new rive.Rive({
                src: `imagens/${fileName}.riv`,
                canvas: canvas,
                stateMachines: 'Anime',
                autoplay: true,
                fit: rive.Fit.COVER,
                alignment: rive.Alignment.CENTER
            });
        };

        const personagens = document.querySelectorAll('.personagem');
        const imagemPersonagemGrande = document.getElementById('imagem-personagem-grande');
        const riveCanvas = document.getElementById('riveCanvas');

        personagens.forEach((personagem) => {
            personagem.addEventListener('mouseenter', () => {
                const idPersonagem = personagem.getAttribute('id');
                const personagemSelecionado = document.querySelector('.selecionado');
                personagemSelecionado.classList.remove('selecionado');
                personagem.classList.add('selecionado');

                if (idPersonagem === 'wolverine' || idPersonagem === 'ciclope') {
                    loadRiveAnimation(idPersonagem);
                    riveCanvas.style.display = 'block';
                    imagemPersonagemGrande.style.display = 'none';
                } else {
                    imagemPersonagemGrande.src = `imagens/card-${idPersonagem}.png`;
                    imagemPersonagemGrande.style.display = 'block';
                    riveCanvas.style.display = 'none';
                }

                document.getElementById('nome-personagem').innerText = personagem.getAttribute('data-name');
                document.getElementById('descricao-personagem').innerText = personagem.getAttribute('data-description');
            });
        });

        // Função para selecionar Magneto ao carregar a página
        window.addEventListener('load', () => {
            const magneto = document.getElementById('magneto');
            magneto.classList.add('selecionado');

            document.getElementById('nome-personagem').innerText = magneto.getAttribute('data-name');
            document.getElementById('descricao-personagem').innerText = magneto.getAttribute('data-description');
            imagemPersonagemGrande.src = 'imagens/card-magneto.png';
            imagemPersonagemGrande.style.display = 'block';
            riveCanvas.style.display = 'none';
        });