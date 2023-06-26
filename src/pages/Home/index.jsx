import "./index.scss";

import SearchBar from "../../components/SearchBar";
import Result from "../../components/Result";

import logo from "../../assets/logo.webp";

export default function Home() {
  return (
    <div>
      <header>
        <img src={logo} alt="Logo de Spotify" className="logo" />
      </header>
      <section className="search">
        <p className="search__desc">Rechercher une playlist dans Spotify</p>
        <SearchBar />
      </section>
      <section className="results">
        <p className="search__nbResults">XX Résultats trouvés</p>
        <Result name="Nom de la playlist" creator="Audrey" />
      </section>
    </div>
  );
}
