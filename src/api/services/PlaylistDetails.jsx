export default async function getPlaylistDetails({ id, setDetails }) {
  await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then(function (res) {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Request failed while looking for playlist tracks");
      }
    })
    .then((data) => {
      console.log(data);
      setDetails(data);
    });
}
