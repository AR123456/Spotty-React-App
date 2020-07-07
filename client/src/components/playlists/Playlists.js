import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PlaylistItem from "./PlaylistItem";
import Spinner from "../layout/Spinner";
import ShareContext from "../../context/share/shareContext";

const Playlists = () => {
  const shareContext = useContext(ShareContext);

  const { playlists, filtered, getPlaylists, loading } = shareContext;

  useEffect(() => {
    getPlaylists();
    // eslint-disable-next-line
  }, []);

  if (playlists !== null && playlists.length === 0 && !loading) {
    return <h4>Please add a playlist</h4>;
  }

  return (
    <Fragment>
      {playlists !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((playlist) => (
                <CSSTransition
                  key={playlist._id}
                  timeout={500}
                  classNames="item"
                >
                  <PlaylistItem playlist={playlist} />
                </CSSTransition>
              ))
            : playlists.map((playlist) => (
                <CSSTransition
                  key={playlist._id}
                  timeout={500}
                  classNames="item"
                >
                  <PlaylistItem playlist={playlist} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Playlists;
