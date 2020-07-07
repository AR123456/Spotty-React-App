import React, { useContext, useRef, useEffect } from "react";
import ShareContext from "../../context/share/shareContext";

const PlaylistFilter = () => {
  const shareContext = useContext(ShareContext);
  const text = useRef("");

  const { filterPlaylists, clearFilter, filtered } = shareContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterPlaylists(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Playlists..."
        onChange={onChange}
      />
    </form>
  );
};

export default PlaylistFilter;
