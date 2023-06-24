import Button from "../../components/Button";

import "./index.scss";

import cover from "../../assets/cover.png";

export default function Playlist() {
  document.title = "Spotify - Lecteur web";
  return (
    <div className="playlist">
      <header className="playlist__header">
        <img
          src={cover}
          alt="Couverture de la playlist séléctionnée"
          className="playlist__albumCover"
        />
        <div className="playlist__detailsContainer">
          <h1 className="playlist__title">[Edit Title Here]</h1>
          <Button label="FOLLOWING" type=" playlist button button--secondary" />
          <p className="playlist__details">ARTIST NAME • 122,310 FOLLOWERS</p>
          <Button label="SHUFFLE PLAY" type="playlist button button--primary" />
        </div>
      </header>
    </div>
  );
}
