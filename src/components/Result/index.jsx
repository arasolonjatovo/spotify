import "./index.scss";

import cover from "../../assets/cover.png";

import Button from "../Button";

export default function Result({ name, creator }) {
  return (
    <article className="result">
      <div className="result__leftPart">
        <img
          src={cover}
          alt="Couverture de la playlist"
          className="result__cover"
        />
        <div className="result__details">
          <p className="result__name">Titre • {name}</p>
          <p className="result__creator">{creator}</p>
        </div>
      </div>
      <Button label="Voir" type="result button button--primary" />
    </article>
  );
}
