import "./index.scss";

import SearchBar from "../../components/SearchBar";

import logo from "../../assets/logo.webp";

export default function Home() {
  return (
    <div>
      <header>
        <img src={logo} alt="Logo de Spotify" className="logo" />
      </header>
      <section className="search">
        <p>Rechercher une playlist dans Spotify</p>
        <SearchBar />
      </section>
    </div>
  );
}
