import { useNavigate } from "react-router-dom";

import "./index.scss";

import Button from "../../components/Button";

import logo from "../../assets/logo.webp";

export default function Error() {
  const navigate = useNavigate();
  document.title = "Oops, tout ne s'est aps passé comme prévu";

  return (
    <div className="error">
      <img src={logo} alt="Logo de spotify" className="error__logo" />
      <h1 className="error__title">Page introuvable</h1>
      <p className="error__para">
        Nous ne trouvons pas la page que vous cherchez
      </p>
      <Button
        label="Accueil"
        type="error button button--primary"
        onClick={() => navigate(`/`)}
      />
    </div>
  );
}
