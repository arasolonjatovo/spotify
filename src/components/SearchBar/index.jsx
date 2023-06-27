import { useState } from "react";

import "./index.scss";

import searchPlaylist from "../../api/services/Search";

import Button from "../Button";

//@params {function} setPlaylists

export default function SearchBar({ setPlaylists }) {
  const [searchKey, setSearchKey] = useState("");

  // @params {string} input
  function validInput(input) {
    if (input === "") {
      document.querySelector(
        ".searchbar.button.button--primary"
      ).disabled = true;
      return false;
    } else {
      document.querySelector(
        ".searchbar.button.button--primary"
      ).disabled = false;
      searchPlaylist(searchKey, setPlaylists);
      return true;
    }
  }

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
        onClick={() => validInput(searchKey)}
      />
    </label>
  );
}
