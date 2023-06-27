export default async function searchPlaylist(searchKey, setPlaylists) {
  await fetch(
    `https://api.spotify.com/v1/search?q=${searchKey}&type=playlist&limit=50`,
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
  )
    .then(function (res) {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Request failed while looking for playlists");
      }
    })
    .then((data) => {
      setPlaylists(data.playlists.items);
    });
}
