function InfoSuggestions(props) {
  return (
    <div className="options">
      <div className="options-info">
        <img src={props.source} alt={props.alt} />
        <div>
          <h2>{props.title}</h2>
          <p>Segue você</p>
        </div>
      </div>
      <p className="follow">Seguir</p>
    </div>
  );
}

export default function Aside({ ig, title, source, alt }) {
  const suggestions = [
    {
      source: "./images/badvibesmemes.png",
      alt: "badvibesmemes",
      title: "bad.vibes.memes",
    },
    {
      source: "./images/chibirdart.png",
      alt: "",
      title: "chibirdart",
    },
    {
      source: "./images/razoesparaacreditar.png",
      alt: "",
      title: "razoesparaacreditar",
    },
    {
      source: "./images/adorableanimals-side.png",
      alt: "",
      title: "adorable_animals",
    },
    {
      source: "./images/smallcutecats.png",
      alt: "",
      title: "smallcutecats",
    },
  ];

  return (
    <aside className="sidebar">
      <div className="profile">
        <img src={source} alt={alt} />
        <div>
          <h2>{ig}</h2>
          <p>{title}</p>
        </div>
      </div>
      <div className="suggestions">
        <h3>Sugestões para você</h3>
        <h3>
          <strong>Ver tudo</strong>
        </h3>
      </div>

      {suggestions.map(({ source, title, alt }, index) => (
        <InfoSuggestions key={index} source={source} title={title} alt={alt} />
      ))}

      <div className="infos">
        <h5>
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </h5>
        <h5>© 2021 INSTAGRAM DO FACEBOOK</h5>
      </div>
    </aside>
  );
}
