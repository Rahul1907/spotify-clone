import React, { useEffect, useState } from "react";
import "./App.css";

import SpotifyWebAPi from "spotify-web-api-js";
import Login from "./Components/Login";
import Player from "./Components/Player";
import { getTokenFromUrl } from "./API/spotify";

const spotify = new SpotifyWebAPi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    console.log(_token);
    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("user:-", user);
      });
    }
  }, []);

  return (
    <div className="App">
      {token ? <Player /> : <Login />}
      {/* spotify logo */}
      {/* Login with spotify button */}
    </div>
  );
}

export default App;
