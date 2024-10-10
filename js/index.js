//esse trecho está buscando um elemento no html que no caso é que tem o id ciclope
//baixo temos uma maneira de criar uma variavel mais para o projeto podemos melhorar a forma de acessar esses objetos pois podem surgir mais personagens no decorrer do projeto e ao inves de criar cada um usamos outra forma 
//const itemCiclope = console.log(document.getElementById('ciclope'));
document.querySelectorAll('.personagem');
//o método acima pode ser usado tando para classe quanto para tag ou outro objeto
//podemos usar o consdole.log para ver a saida e veremos a quantidade itens retornado
console.log(document.querySelectorAll('.personagem'));
//já conseguimos saber quais personagens existem
//proximo passo é usar um método para ouvir o que o usuario está fazendo, a exemplo ao passar o mouse sobre determinado local
//para fazer alguma ação usamos o arraw function 
//abaixo fazemos o for para varrer os itens
const personagens = document.querySelectorAll('.personagem');
// personagens.forEach(personagem => {
//     console.log(personagem);
// });
//abaixo podemos usar o método para escutar que é o evento para cada personagem 
//personagens = document.querySelectorAll('.personagem');
// personagens.forEach(personagem => {
//     personagem.addEventListener('mouseenter', () => {
//         console.log('mouse entrou na LI');
//     });
// });
//entao o código acima ao passar o mouse ele vai mostrar no console
//agora vamos usar o codigo na prática
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter',()=>{
        //fazer com que o elemento anterior tire sua seleção e coloque 
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');
        //trecho para mudar agora o personagem na imagem
        //pegar o elemento do personagem grande pra adicionar as informações nele
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        //alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;
        //detalhe a observar que eve usar o simbolo de crase e não aspas
        imagemPersonagemGrande.src = `imagens/card-${idPersonagem}.png`;
        //alterar o nome do personagem da imagem grande
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');
        //alterar a descrição dos personagens da imagem grande
        const descricaoPersoagem = document.getElementById('descricao-personagem');
        descricaoPersoagem.innerText = personagem.getAttribute('data-description');
    });
});
