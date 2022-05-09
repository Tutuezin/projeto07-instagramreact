function Video(props) {
  return (
    <video autoPlay muted>
      <source src={props.source1} type={props.type1} />
      <source src={props.source2} type={props.type2} />
    </video>
  );
}

export default function PostMiddle(props) {
  return (
    <div
      className="post-img"
      onClick={(event) => {
        if (!props.heartSelected && event.detail === 2)
          props.setheartSelected(!props.heartSelected);
      }}
    >
      {props.type === "video" ? (
        <Video
          source1={props.source + ".mp4"}
          type1="video/mp4"
          source2={props.source + ".ovg"}
          type2="video/ovg"
        />
      ) : (
        <img src={props.source + ".png"} alt="" />
      )}
    </div>
  );
}
