import PostTop from "./components/PostTop";
import PostBottom from "./components/PostBottom";
import PostMiddle from "./components/PostMiddle";

export default function Post({ topInfo, middleInfo, bottomInfo }) {
  return (
    <div className="post">
      <PostTop source={topInfo.source} title={topInfo.title} />
      <PostMiddle source={middleInfo.source} type={middleInfo.type} />
      <PostBottom
        source={bottomInfo.source}
        wholiked={bottomInfo.wholiked}
        qntlikes={bottomInfo.qntlikes}
      />
    </div>
  );
}
