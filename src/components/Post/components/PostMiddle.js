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
    <div className="post-img">
      <Video
        source1="./images/video.mp4"
        type1="video/mp4"
        source2="./images/video.ogv"
        type2="video/ogg"
      />
    </div>
  );
}
