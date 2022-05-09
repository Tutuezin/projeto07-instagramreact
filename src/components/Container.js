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
        </div>
        <Aside
          ig="alcantaratutu"
          title="Arthur Alcantara"
          source="./images/eu.png"
          alt="Tutuzera from brazil"
        />
        <div className="mobile">
          <ion-icon name="home"></ion-icon>
          <ion-icon name="search"></ion-icon>
          <ion-icon name="add-circle-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
    </main>
  );
}
