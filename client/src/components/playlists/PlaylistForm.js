import React, { useState, useContext, useEffect } from "react";
import ShareContext from "../../context/share/shareContext";

const PlaylistForm = () => {
  const shareContext = useContext(ShareContext);

  const { addPlaylist, updatePlaylist, clearCurrent, current } = shareContext;

  useEffect(() => {
    if (current !== null) {
      setPlaylist(current);
    } else {
      setPlaylist({
        name: "",
        spotifyURL: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [shareContext, current]);

  const [playlist, setPlaylist] = useState({
    name: "",
    spotifyURL: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, spotifyURL, email, phone, type } = playlist;

  const onChange = (e) =>
    setPlaylist({ ...playlist, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addPlaylist(playlist);
    } else {
      updatePlaylist(playlist);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? "Edit Playlist" : "Add Playlist"}
      </h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="spotifyURL"
        name="spotifyURL"
        value={spotifyURL}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5> playlist Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={onChange}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={onChange}
      />{" "}
      Professional
      <div>
        <input
          type="submit"
          value={current ? "Update Playlist" : "Add Playlist"}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default PlaylistForm;
