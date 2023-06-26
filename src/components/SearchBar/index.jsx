import "./index.scss";

import Button from "../Button";

export default function SearchBar() {
  return (
    <label className="searchbar">
      <input type="search" name="seachbar" id="searchbarInput" />
      <Button label="Rechercher" type="searchbar button button--primary" />
    </label>
  );
}
