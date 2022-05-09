import PostTop from "./components/PostTop";
import PostBottom from "./components/PostBottom";
import PostMiddle from "./components/PostMiddle";

export default function Post(props) {
  return (
    <div className="post">
      <PostTop props={props.topInfo} />
      <PostMiddle props={props.middleInfo} />
      <PostBottom props={props.bottomInfo} />
    </div>
  );
}
