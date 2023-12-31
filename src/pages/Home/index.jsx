import { useState } from "react";

import "./index.scss";

import SearchBar from "../../components/SearchBar";
import Result from "../../components/Result";

import logo from "../../assets/logo.webp";

export default function Home() {
  document.title = "Trouvez des playlists qui vous correspondent";

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
          {playlists.length <= 1
            ? `${playlists.length} Résultat trouvé`
            : `${playlists.length} Résultats trouvés`}
        </p>
        {
          // display every item in the playlists array
          playlists.map((playlist, index) => (
            <Result
              name={playlist.name}
              creator={playlist.owner.display_name}
              key={index}
              cover={playlist.images[0].url}
              id={playlist.id}
            />
          ))
        }
      </section>
    </div>
  );
}
