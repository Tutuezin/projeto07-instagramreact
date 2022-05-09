import { useState } from "react";
import PostTop from "./components/PostTop";
import PostBottom from "./components/PostBottom";
import PostMiddle from "./components/PostMiddle";

export default function Post({ topInfo, middleInfo, bottomInfo }) {
  const [heartSelected, setheartSelected] = useState(false);

  return (
    <div className="post">
      <PostTop source={topInfo.source} title={topInfo.title} />
      <PostMiddle
        heartSelected={heartSelected}
        setheartSelected={setheartSelected}
        source={middleInfo.source}
        type={middleInfo.type}
      />
      <PostBottom
        source={bottomInfo.source}
        wholiked={bottomInfo.wholiked}
        qntlikes={bottomInfo.qntlikes}
        heartSelected={heartSelected}
        setheartSelected={setheartSelected}
      />
    </div>
  );
}
