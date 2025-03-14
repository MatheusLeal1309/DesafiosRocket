const content = document.querySelector("main#conteudo");
const menu = document.querySelector("aside#menu");
const menuButton = document.querySelector("#header .menu-button")

const posts = [{
    id: "1",
    title: "O que é um Anime?",
    content: `<p>
          Anime é um estilo de animação originado no Japão, conhecido por sua diversidade de gêneros, traços detalhados
          e enredos cativantes.
        </p>
        <h3>Principais gêneros de Anime:</h3>
        <ul>
          <li>Shonen: Focado em ação e aventura, geralmente voltado para o público jovem masculino. Exemplo: Naruto, One
            Piece.</li>
          <li>Shoujo: Romances e dramas com forte apelo emocional. Exemplo: Sailor Moon, Fruits Basket.</li>
          <li>Seinen: Animes voltados para um público mais maduro, com histórias complexas. Exemplo: Berserk, Tokyo
            Ghoul.</li>
          <li>Isekai: Personagens transportados para outros mundos. Exemplo: Sword Art Online, Re:Zero.</li>
          <li>Slice of Life: Histórias do cotidiano, geralmente com foco em emoções e relacionamentos. Exemplo: Clannad,
            Your Lie in April.</li>
        </ul>`
},
{
    id: "2",
    title: "O que são Mangás?",
    content: ` <p>
          Mangá é a versão japonesa dos quadrinhos, geralmente publicada em preto e branco, com leitura no sentido
          oriental (da direita para a esquerda).
        </p>
        <h3>Tipos de Mangás:</h3>
        <ul>
          <li>Shonen Jump: Mangás populares voltados para o público jovem. Exemplo: Dragon Ball, Bleach.</li>
          <li>Josei: Focado no público feminino adulto, com histórias mais realistas. Exemplo: Nana, Paradise Kiss.</li>
          <li>Mecha: Histórias com robôs gigantes. Exemplo: Gundam, Neon Genesis Evangelion.</li>
        </ul>
        <h3>Diferença entre Anime e Mangá:</h3>
        <p>
          Enquanto os animes são animações, os mangás são quadrinhos ilustrados. Muitos animes são adaptações de mangás
          populares.
        </p>
        <h3 class="anime">Anime</h3>
        <img src="./assets/images/anime.jpg" alt="">
        <h3 class="anime">Mangá</h3>
        <img src="./assets/images/manga.jpg" alt="">`,
},
{
    id: "3",
    title: "Os 10 Melhores Animes do Ano e do Século",
    content: ` <h3>Os 10 Melhores Animes do Ano (2024)</h3>
          <ul>
            <li>Solo Leveling – Uma adaptação muito aguardada da web novel coreana, trazendo animação espetacular e
              batalhas eletrizantes.</li>
            <li>Kaiju No. 8 – Um anime de ação e ficção científica que surpreendeu com sua história cativante e cenas de
              lutas impressionantes.</li>
            <li>Mushoku Tensei: Jobless Reincarnation (2ª temporada) – Continuidade de um dos melhores isekais da
              década,
              com animação impecável e uma história envolvente.</li>
            <li>Jujutsu Kaisen (2ª temporada - Arco de Shibuya) – Um dos shounens mais populares da atualidade,
              entregando
              lutas insanas e um enredo cada vez mais denso.</li>
            <li>Bleach: Thousand-Year Blood War (Parte 3) – O retorno triunfal de Bleach continua, trazendo momentos
              épicos e nostálgicos para os fãs.</li>
            <li>Attack on Titan: The Final Chapters – A conclusão de uma das séries mais impactantes dos últimos anos.
            </li>
            <li>Oshi no Ko (2ª temporada) – Depois de uma estreia explosiva, a continuação promete aprofundar o drama e
              os
              mistérios do mundo do entretenimento japonês.</li>
            <li>Frieren: Beyond Journey's End – Uma obra emocionante e filosófica que explora a imortalidade e o
              significado da jornada.</li>
            <li>Zom 100: Bucket List of the Dead – Um anime de zumbis com uma abordagem divertida e visualmente
              impressionante.</li>
            <li>Blue Lock (2ª temporada) – O anime de futebol que redefiniu o gênero esportivo retorna com mais
              intensidade e desafios.</li>
          </ul>
          <h3>Os 10 Melhores Animes do Século (2000-2024)</h3>
          <ul>
            <li>Attack on Titan (2013-2023) – Uma obra-prima moderna que redefiniu o gênero shounen e conquistou fãs no
              mundo todo.</li>
            <li>Fullmetal Alchemist: Brotherhood (2009-2010) – Considerado um dos melhores animes já feitos, com um
              enredo
              complexo e emocionalmente impactante.</li>
            <li>Steins;Gate (2011) – Uma das melhores histórias de viagem no tempo, com personagens memoráveis e um
              roteiro incrível.</li>
            <li>Death Note (2006-2007) – Um thriller psicológico que marcou a cultura pop, com o embate intelectual
              entre
              Light Yagami e L.</li>
            <li>One Piece (1999 - presente) – O maior shounen de todos os tempos, com uma história rica e cheia de
              aventuras inesquecíveis.</li>
            <li>Demon Slayer (2019 - presente) – Elevou a qualidade de animação a outro nível e popularizou ainda mais o
              gênero.</li>
            <li>Hunter x Hunter (2011-2014) – Uma das histórias mais bem escritas do shounen, com arcos memoráveis e
              personagens incríveis.</li>
            <li>Your Name (2016) – O filme que conquistou o mundo, com uma história de amor e fantasia inesquecível.
            </li>
            <li>Code Geass (2006-2008) – Uma mistura de mechas, estratégia política e um protagonista lendário, Lelouch.
            </li>
            <li>Vinland Saga (2019 - presente) – Uma adaptação fiel e emocionante da saga viking, com personagens
              profundos e cenas de ação intensas.</li>
          </ul>`
}
];

function addPost(post) {
    const article = document.createElement("article");
    article.className = "post";
    article.setAttribute("data-post", post.id);
    const header = document.createElement("header");
    header.className = "header";
    const title = document.createElement("h2");
    title.innerHTML = post.title;
    header.appendChild(title);
    const conteudo = document.createElement("section");
    conteudo.className = "conteudo";
    conteudo.innerHTML = post.content;

    article.appendChild(header);
    article.appendChild(conteudo);
    content.appendChild(article);
}
posts.forEach(addPost);


// menuButton.addEventListener("click", toogleMenu);

// for (i = 0; i < posts.length; i++) {
//     addPost(posts[i]);
// }


// const header = document.getElementById("header");
// console.log(header);
// console.dir(header);

// const links = document.getElementsByTagName("a");
// console.log(links);

// const posts = document.getElementsByClassName("post");
// console.log(posts);

// const headerButton = document.querySelector("#header button");
// console.log(headerButton);
// console.dir(headerButton);

// const paragrafos = document.querySelectorAll(".post p");
// console.log(paragrafos);