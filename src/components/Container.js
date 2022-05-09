import Stories from "./Stories";
import Posts from "./Posts";
import Aside from "./Aside";

export default function Container() {
  return (
    <main>
      <div className="container">
        <div className="home">
          <Stories />
          <Posts />
          <Aside />
        </div>
      </div>
    </main>
  );
}
