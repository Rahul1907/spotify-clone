import React, { useEffect, useState } from "react";
import "./App.css";

import SpotifyWebAPi from "spotify-web-api-js";
import Login from "./Components/Login";
import Player from "./Components/Player";
import { getTokenFromUrl } from "./API/spotify";
import { useDataLayerValue } from "./Components/DataLayer";

const spotify = new SpotifyWebAPi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    console.log(_token);
    if (_token) {
      setToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
  }, []);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
      {/* spotify logo */}
      {/* Login with spotify button */}
    </div>
  );
}

export default App;
