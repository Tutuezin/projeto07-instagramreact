function TopInfo(props) {
  return (
    <>
      <img src={props.source} alt="" />
      <h2>{props.title}</h2>
    </>
  );
}

export default function PostTop(props) {
  return (
    <div className="post-top">
      <section>
        <TopInfo source={props.source} title={props.title} />
      </section>

      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
  );
}
