function BottonInfo(props) {
  return (
    <div className="likes">
      <img src={props.source} alt="" />
      <p>
        Curtido por <strong>{props.wholiked}</strong> e
        <strong> outras {props.qntlikes}</strong>
      </p>
    </div>
  );
}

export default function PostBottom() {
  return (
    <div className="post-bottom">
      <div className="icons-bottom">
        <section>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </section>

        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
      <BottonInfo
        source="./images/like-respondeai.png"
        wholiked="respondeai"
        qntlikes=" 211.276"
      />
    </div>
  );
}