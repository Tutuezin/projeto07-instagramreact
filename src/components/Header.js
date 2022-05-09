export default function Header() {
  return (
    <header>
      <div className="menu-top">
        <div className="insta-logos">
          <ion-icon name="logo-instagram"></ion-icon>
          <div className="divider"></div>
          <img src="images/logo.png" alt="Logo" />
        </div>
        <input type="search" placeholder="Pesquisar" />
        <div className="other-icons">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
      <div className="header-mobile">
        <ion-icon name="logo-instagram"></ion-icon>
        <img src="./images/logo.png" alt="Logo" />
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
    </header>
  );
}
