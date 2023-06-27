const requestOpt = {
  url: "https://accounts.spotify.com/api/token",
  method: "POST",
  headers: {
    // btoa encoded in base 64 the given string
    Authorization:
      "Basic " +
      btoa(
        process.env.REACT_APP_CLIENT_ID +
          ":" +
          process.env.REACT_APP_CLIENT_SECRET
      ),
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: "grant_type=client_credentials",
};

fetch(requestOpt.url, {
  method: requestOpt.method,
  headers: requestOpt.headers,
  body: requestOpt.body,
})
  .then(function (res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Request failed with status" + res.status);
    }
  })
  .then((data) => {
    const token = data.access_token;
    localStorage.setItem("token", token);
  });
