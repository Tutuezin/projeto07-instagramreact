import Post from "./Post";

export default function Posts() {
  const infoPost = [
    {
      topInfo: {
        source: "",
        title: "",
      },
      middleInfo: {
        type: "",
        source: "",
      },
      bottomInfo: {
        source: "",
        wholiked: "",
        qntLikes: "",
      },
    },
  ];

  return (
    <div className="posts">
      {infoPost.map((item) => {
        return <Post props={item} />;
      })}
    </div>
  );
}
