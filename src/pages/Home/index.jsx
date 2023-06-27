import { useState } from "react";

import "./index.scss";

import SearchBar from "../../components/SearchBar";
import Result from "../../components/Result";

import logo from "../../assets/logo.webp";

export default function Home() {
  const [playlists, setPlaylists] = useState([]);
  return (
    <div>
      <header>
        <img src={logo} alt="Logo de Spotify" className="logo" />
      </header>
      <section className="search">
        <p className="search__desc">Rechercher une playlist dans Spotify</p>
        <SearchBar setPlaylists={setPlaylists} />
      </section>
      <section className="results">
        <p className="search__nbResults">
          {playlists.length} Résultats trouvés
        </p>
        {playlists.map((playlist, key) => (
          <Result
            name={playlist.name}
            creator={playlist.owner.display_name}
            key={playlist.id}
            cover={playlist.images[0].url}
          />
        ))}
      </section>
    </div>
  );
}
