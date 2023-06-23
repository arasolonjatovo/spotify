import Button from "../../components/Button";

import "./index.scss";

import cover from "../../assets/cover.png";

export default function Playlist() {
  document.title = "Spotify - Lecteur web";
  return (
    <div className="playlist">
      <header>
        <img
          src={cover}
          alt="Couverture de la playlist séléctionnée"
          className="playlist__albumCover"
        />
        <h1 className="playlist__title">[EDIT TITLE HERE]</h1>
      </header>
      {/* <section>
        <Button label="FOLLOWING" />
        <h2>ARTIST NAME • 122,310 FOLLOWERS</h2>
        <Button label="SHUFFLE PLAY" />
      </section>
      <section>
        <div>
          <p>Download</p>
        </div>
      </section> */}
    </div>
  );
}
