// make this more of an actions context
import {
  GET_PLAYLISTS,
  ADD_PLAYLIST,
  DELETE_PLAYLIST,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PLAYLIST,
  FILTER_PLAYLISTS,
  CLEAR_FILTER,
  PLAYLIST_ERROR,
  CLEAR_PLAYLISTS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload,
        loading: false,
      };
    case ADD_PLAYLIST:
      return {
        ...state,
        playlists: [action.payload, ...state.playlists],
        loading: false,
      };
    case UPDATE_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === action.payload._id ? action.payload : playlist
        ),
        loading: false,
      };
    case DELETE_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.filter(
          (playlist) => playlist._id !== action.payload
        ),
        loading: false,
      };
    case CLEAR_PLAYLISTS:
      return {
        ...state,
        playlists: null,
        filtered: null,
        error: null,
        current: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_PLAYLISTS:
      return {
        ...state,
        filtered: state.playlists.filter((playlist) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return playlist.name.match(regex) || playlist.email.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case PLAYLIST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
