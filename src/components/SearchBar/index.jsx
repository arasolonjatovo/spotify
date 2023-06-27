import { useState } from "react";

import "./index.scss";

import searchPlaylist from "../../api/services/Search";

import Button from "../Button";

export default function SearchBar({ setPlaylists }) {
  const [searchKey, setSearchKey] = useState("");

  return (
    <label className="searchbar">
      <input
        type="search"
        name="seachbar"
        id="searchbarInput"
        placeholder="Ex: Taylor Swift"
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <Button
        label="Rechercher"
        type="searchbar button button--primary"
        onClick={() => searchPlaylist(searchKey, setPlaylists)}
      />
    </label>
  );
}
