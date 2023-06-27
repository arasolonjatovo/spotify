import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import getPlaylistDetails from "../../api/services/PlaylistDetails";

import Button from "../../components/Button";
import Toggle from "../../components/Toggle";
import Song from "../../components/Song";

import "./index.scss";

export default function Playlist() {
  document.title = "Spotify - Lecteur web";
  let { id } = useParams();
  const [details, setDetails] = useState([]);
  const [load, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await getPlaylistDetails({ id, setDetails });
      setLoading(false);
    };
    loadData();
  }, [id]);

  // @params {boolean} state

  function logState(state) {
    console.log("Actif: ", state);
  }
  return (
    <>
      {!load && (
        <div className="playlist">
          <header className="playlist__header">
            <img
              src={details.images[0].url}
              alt="Couverture de la playlist séléctionnée"
              className="playlist__albumCover"
            />
            <div className="playlist__detailsContainer">
              <h1 className="playlist__title">{details.name}</h1>
              <Button
                label="FOLLOWING"
                type=" playlist button button--secondary"
              />
              <p className="playlist__details">
                {details.owner.display_name} •{" "}
                {details.followers.total.toLocaleString("en-US")} FOLLOWERS
              </p>
              <Button
                label="SHUFFLE PLAY"
                type="playlist button button--primary"
              />
            </div>
          </header>
          <section className="download">
            <p>Download</p>
            <Toggle toggled={false} onClick={logState} />
          </section>
          <section className="songSection">
            {details.tracks.items.map((detail, index) => (
              <Song
                key={index}
                name={detail.track?.name}
                artist={detail.track?.artists[0].name}
              />
            ))}
          </section>
        </div>
      )}
    </>
  );
}
