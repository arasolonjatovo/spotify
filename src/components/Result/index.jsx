import { useNavigate } from "react-router-dom";

import "./index.scss";

import Button from "../Button";

// @params {string} name
// @params {string} creator
// @params {string} cover
// @params {string} id

export default function Result({ name, creator, cover, id }) {
  const navigate = useNavigate();
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
      <Button
        label="Voir"
        type="result button button--primary"
        onClick={() => navigate(`/playlist/${id}`)}
      />
    </article>
  );
}
