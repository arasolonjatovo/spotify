import "./index.scss";

import elipsis from "../../assets/elipsis.webp";

// @params {string} name
// @params {string} artist

export default function Song({ name, artist }) {
  return (
    <article>
      <div className="song">
        <div className="song__details">
          <p className="song__name">{name}</p>
          <p className="song__artist">{artist}</p>
        </div>
        <img src={elipsis} alt="Kebab menu" className="song__menuIcon" />
      </div>
    </article>
  );
}
