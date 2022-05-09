function Storie(props) {
  return (
    <div className="storie">
      <div className="storie-background">
        <img src={props.source} alt="" />
      </div>
      <h3>{props.title}</h3>
    </div>
  );
}

export default function Stories() {
  const storieIcons = [
    {
      source: "./images/9gag.png",
      title: "9gag",
    },
    {
      source: "./images/meowed.png",
      title: "meowed",
    },
    {
      source: "./images/nathanwpylestrangeplanet.png",
      title: "nathan...",
    },
    {
      source: "./images/wawawiwacomicsa.png",
      title: "wawaiwac...",
    },
    {
      source: "./images/respondeai.png",
      title: "respondeai",
    },
    {
      source: "./images/filomoderna.png",
      title: "filomoderna",
    },
    {
      source: "./images/memeriagourmet.png",
      title: "memeria...",
    },
    {
      source: "./images/barked.png",
      title: "barked",
    },
  ];

  return (
    <div className="box-stories">
      {storieIcons.map((item) => (
        <Storie source={item.source} title={item.title} />
      ))}
      <div className="vector">
        <img src="./images/Vector.svg" alt="Storie button" />
      </div>
    </div>
  );
}
