const AlbumsApi = {
  albums: [
    {
      id: 1,
      name: "Anitta",
      year: "Lançamento: 6 de julho de 2013",
      spotifyURI: "spotify:album:7IcgpWsMMBvW5NzNoKRu6z",
      text: '<p>Após ter chamado a atenção do DJ Renato Azevedo - conhecido como Batutinha -, ao ter gravado um cover da canção "Soltinha", de Priscila Nocetti e postado em seu canal no site de vídeos online YouTube, Anitta foi convidada por Azevedo para fazer alguns testes de canto e apresentações, chamando atenção de Batutinha ao dançar stiletto - modalidade de dança em cima do salto alto -, e decidiu trabalhar com ela. "A Anitta é um conjunto. A música, a voz, a dança, o carisma e o show", declarou o dee jay.[4] A partir de então, Anitta começou a trabalhar para a Furacão 2000, mas, em junho de 2012 a empresária Kamilla Fialho, pagou cerca de R$ 260 mil à equipe, para que Anitta fosse agenciada por ela.[4] Fialho montou um espetáculo com músicos e dançarinos, investiu na imagem de Anitta, e a apresentou aos produtores Umberto Tavares e Mãozinha. Então, as grandes gravadoras procuraram Kamilla, porém foi com a Warner Music que em janeiro de 2013, e em fevereiro Anitta lançou "Meiga e Abusada", primeira canção de trabalho e faixa que anunciava o álbum que estava projetado para setembro.</p><p>O projeto começou a ser desenvolvido em fevereiro, porém, as canções não eram suficientes para preencher um álbum. Então, a artista entrou em estúdio para compor com a equipe de produção.[4] Segundo Wagner Vianna, diretor artístico da Warner, "a galera ficou sem dormir algumas noites.[4] A Anitta deu muita opinião, mas não foi complicado".[5][6] Nesse período, Anitta escreveu sozinha "Show das Poderosas" e "Tá na Mira". A gravadora gostou da primeira canção e a lançou como o segundo single de Anitta.[4] Devido ao desempenho da canção, o lançamento do álbum foi adiantado e em 20 de junho de 2013 a cantora divulgou a capa do álbum em sua página oficial no Facebook.[7][8] Na capa, a Anitta aparece em um "fundo marrom, com os braços aberto e seu nome escrito com um glitter rosa na imagem", descreve a revista Caras.</p>'
    },
    {
      id: 2,
      name: "Ritmo Perfeito",
      year: "Lançamento: 3 de junho de 2014",
      spotifyURI: "spotify:album:4QTjlWk0JCR6w5S1ZVitkJ",
      text: '<p>Anitta anunciou em julho de 2013 que estaria preparando a gravação de seu primeiro DVD, que viria a ser intitulado Meu Lugar.[7][8] Para o show especial, que teve grande produção, a cantora criou novas músicas, inéditas, que seriam apresentadas no show.[9] Tempos depois, Anitta anunciou em um de seus vídeos do Youtube "Blá Blá Blá com Anitta" que lançaria 2 novos álbuns, um seria ao vivo, com áudio extraído do DVD Meu Lugar e outro que seria a versão de estúdio das novas músicas cantadas no DVD, além de uma inédita, que não foi apresentada no show, esse álbum viria a ser o Ritmo Perfeito.</p><p>Anitta colaborou com novos escritores no segundo álbum de estúdio, entre eles está o rapper Projota, que trabalhou nas musicas "Cobertor" e "Mulher" que é uma versão da música do rapper, com participação de Anitta. Umberto Tavares também participou da composição de algumas faixas.</p><p>A divulgação de Ritmo Perfeito foi feita em rádios e em programas de tv, no começo foram divulgadas duas músicas do projeto que foram liberadas no iTunes, mas em versão ao vivo.[12][13] A primeira canção lançada exclusivamente para o álbum foi "Cobertor"[14] que teve um videoclipe lançado de surpresa na sua conta no YouTube.[15] Um mês depois o segundo single foi lançado, "Na Batida".[16] O álbum conseguiu disco de ouro pela ABPD.</p>'
     },
    {
      id: 3,
      name: "Bang",
      year: "Lançamento: 13 de outubro de 2015",
      spotifyURI: "spotify:album:2xtRHrXduvq6S7rrzmS0dK",
      text: '<p>Logo após o lançamento do último single do álbum Ritmo Perfeito, "No Meu Talento", Anitta confirmou que estava trabalhando em novas músicas para o projeto sucessor do mesmo.[3] Os estilos das faixas foram mantidos em segredo até "Deixa Ele Sofrer", a primeira música de trabalho do disco, pois não haviam sido divulgadas prévias oficiais do que se trataria o álbum. Trechos de algumas músicas como "Me Leva a Sério" já haviam vazado na Internet desde meados de junho. Em setembro, a cantora comentou sobre seu novo álbum: "Estou muito focada no meu CD. Vem uma nova Anitta aí e vou mudar o visual", ainda comentando sobre seu sonho de ter uma carreira internacional e a possibilidade de realizá-lo no ano seguinte.</p><p>A capa do álbum foi feita pelo artista brasileiro Giovanni Bianco. Ela mostra a cantora numa foto em preto e branco, mas com detalhes em colorido, com a língua pra fora e um óculos escuros com seu nome escrito. De acordo com Bianco, a cantora lhe passou "um briefing muito precioso: Quero e preciso falar com as crianças e com os adultos. Meus fãs têm todas as idades. Quero algo divertido, pop, feliz, e essa foi a minha inspiração total".[4] Segundo Anitta, foi a primeira vez que teve coragem de deixar todo o processo sob responsabilidade de outra pessoa. "Pedi para ele fazer uma arte que mostrasse força. Ele fez com o bang, mas era para ser provisório. Gostei tanto que resolvi compor uma música com esse título", disse.[5] Para Gabriel Justo da revista Capricho, a capa o fez lembrar de "Bang Bang", single das cantoras Jessie J, Ariana Grande e Nicki Minaj, e o detalhe do nome "Anitta" escrito no óculos lembrava de longe a capa do álbum Unapologetic, da cantora Rihanna.[6] Poucas horas após a divulgação da capa, ela repercutiu nas redes sociais e virou meme entre fãs e famosos, que divulgaram fotos imitando a pose da cantora na capa</p>'
     }
  ],
  get: function(id) {
    const isAlbum = a => a.id === id
    return this.albums.find(isAlbum)
  }
}

export default AlbumsApi;
