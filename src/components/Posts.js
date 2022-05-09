import Post from "./Post";
import infoPost from "./InfoPost";

export default function Posts() {
  return (
    <div className="posts">
      {infoPost.map((item, index) => {
        return (
          <Post
            key={index}
            topInfo={item.topInfo}
            middleInfo={item.middleInfo}
            bottomInfo={item.bottomInfo}
          />
        );
      })}
    </div>
  );
}
