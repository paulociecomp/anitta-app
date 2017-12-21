const ClipsApi = {
  clips: [
    {
      id: "kDhptBT_-VI",
      title: "Anitta, Mc Zaac, Maejor ft. Tropkillaz & DJ Yuri Martins - Vai Malandra (Official Music Video)"
    },
    {
      id: "eYF8tR1Zzu4",
      title: "Poo Bear feat. Anitta - Will I See You | Official Video"
    },
    {
      id: "UGov-KH7hkM",
      title: "Bang"
    },
    {
      id: "-73pafJ9RFg",
      title: "Anitta - Paradinha | Video Oficial"
    },
    {
      id: "omzk3klIy0E",
      title: "Major Lazer - Sua Cara (feat. Anitta & Pabllo Vittar) (Official Music Video)"
    },
    {
      id: "5ggZ9jIHnr8",
      title: "Alesso & Anitta - Is That For Me (Official Music Video)"
    },
    {
      id: "7-rPxmxqa1E",
      title: "Iggy Azalea - Switch (Fan Version) ft. Anitta"
    },
    {
      id: "7Yrghfw1eNo",
      title: "Sim Ou Não - Anitta Feat Maluma"
    },
    {
      id: "K2Wvm7RUalA",
      title: "Cravo e Canela - Anitta Part.Vitin"
    },
    {
      id: "ghQOd88PM80",
      title: "Essa Mina É Louca - Anitta Part. Jhama"
    },
    {
      id: "geFj_kMvasQ",
      title: "Deixa Ele Sofrer (Clipe Oficial) - Anitta"
    },
    {
      id: "uJcbhRzy_UM",
      title: "Zen (Clipe Oficial) - Anitta"
    },
    {
      id: "sMUVXJId8Eo",
      title: "Cobertor (Part. Projota) - Clipe Oficial - Anitta"
    },
    {
      id: "w1vNtmh1SqU",
      title: "Na Batida (Clipe Oficial) - Anitta"
    },
    {
      id: "FGViL3CYRwg",
      title: "Show das Poderosas (Clipe Oficial) - Anitta"
    },
    {
      id: "jtDnmVjPfvM",
      title: "No Meu Talento (Clipe Oficial) - Anitta Feat. Mc Guimê"
    },
    {
      id: "qiv1FSVieiY",
      title: "Não Para (Clipe Oficial) - Anitta"
    }
  ],
  get: function(id) {
    const isVideo = v => v.id === id
    return this.clips.find(isVideo)
  },
  all: function(){
    return this.clips;
  }
}

export default ClipsApi;
