import React, { useContext, useEffect } from "react";
import Playlists from "../playlists/Playlists";
import PlaylistForm from "../playlists/PlaylistForm";
import PlaylistFilter from "../playlists/PlaylistFilter";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
      <div>
        <PlaylistForm />
      </div>
      <div>
        <PlaylistFilter />
        <Playlists />
      </div>
    </div>
  );
};

export default Home;
