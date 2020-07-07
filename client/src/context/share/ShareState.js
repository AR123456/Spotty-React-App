// make context avalbilbe ot toher files
import React, { useReducer } from "react";
import axios from "axios";
import ShareContext from "./shareContext";
import shareReducer from "./shareReducer";
import {
  GET_PLAYLISTS,
  ADD_PLAYLIST,
  DELETE_PLAYLIST,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PLAYLIST,
  FILTER_PLAYLISTS,
  CLEAR_PLAYLISTS,
  CLEAR_FILTER,
  PLAYLIST_ERROR,
} from "../types";

const ShareState = (props) => {
  // initialState  array or object
  const initialState = {
    playlists: null,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(shareReducer, initialState);

  // Get playlists
  const getPlaylists = async () => {
    try {
      const res = await axios.get("/api/playlists");

      dispatch({
        type: GET_PLAYLISTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PLAYLIST_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Add Playlist
  const addPlaylist = async (playlist) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/playlists", playlist, config);

      dispatch({
        type: ADD_PLAYLIST,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PLAYLIST_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Delete playlist
  const deletePlaylist = async (id) => {
    try {
      await axios.delete(`/api/playlists/${id}`);

      dispatch({
        type: DELETE_PLAYLIST,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: PLAYLIST_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Update playlist
  // make this an actions state eventualy
  const updatePlaylist = async (playlist) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `/api/playlists/${playlist._id}`,
        playlist,
        config
      );

      dispatch({
        type: UPDATE_PLAYLIST,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PLAYLIST_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Clear playlists
  const clearPlaylists = () => {
    dispatch({ type: CLEAR_PLAYLISTS });
  };

  // Set Current playlist
  const setCurrent = (playlist) => {
    dispatch({ type: SET_CURRENT, payload: playlist });
  };

  // Clear Current playlist
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter playlists
  const filterPlaylists = (text) => {
    dispatch({ type: FILTER_PLAYLISTS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ShareContext.Provider
      value={{
        playlists: state.playlists,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addPlaylist,
        deletePlaylist,
        setCurrent,
        clearCurrent,
        updatePlaylist,
        filterPlaylists,
        clearFilter,
        getPlaylists,
        clearPlaylists,
      }}
    >
      {props.children}
    </ShareContext.Provider>
  );
};

export default ShareState;
