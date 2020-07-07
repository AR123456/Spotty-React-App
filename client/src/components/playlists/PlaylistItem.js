import React, { useContext } from "react";
import PropTypes from "prop-types";
import ShareContext from "../../context/share/shareContext";

const PlaylistItem = ({ playlist }) => {
  const shareContext = useContext(ShareContext);
  const { deletePlaylist, setCurrent, clearCurrent } = shareContext;

  const { _id, name, spotifyURL, email, phone, type } = playlist;

  const onDelete = () => {
    deletePlaylist(_id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {spotifyURL && (
          <li>
            <a
              className="btn btn-primary btn-block family"
              href={spotifyURL}
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              Spotify playlist link
            </a>
          </li>
        )}
        {email && (
          <li>
            <i className="fas fa-envelope-open" /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone" /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(playlist)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

PlaylistItem.propTypes = {
  playlist: PropTypes.object.isRequired,
};

export default PlaylistItem;
