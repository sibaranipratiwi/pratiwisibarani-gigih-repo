import Modal from "../../components/CreatePlaylist";
import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";

const CreatePlaylist = () => {
  const [playlist, setPlaylist] = useState({
    modal: false,
    playlists: {
      favorites: new Set(),
    },
  });

  const playlistRef = useRef(null);
  const playlists = Object.keys(playlist.playlists);

  const addPlaylist = (e) => {
    e.preventDefault();
    const list = playlistRef.current.value;

    setPlaylist({
      ...playlist,
      modal: false,
      playlists: { ...playlist.playlists, [list]: new Set() },
      toast: "Your playlist was created successfully!",
    });
  };

  return (
    <div className="playlist">
      <ul className="Sidebar">
        <li className="library">List of Playlist</li>

        {playlists.map((list) => (
          <li
            key={list}
            className={list === playlist.currentPlaylist ? "active" : ""}
            onClick={() => {
              setPlaylist({ ...playlist, currentPlaylist: list });
            }}
          >
            {list}
          </li>
        ))}
      </ul>

      <h1>Let's Jump To See More Playlist</h1>
      <Button
        variant="outlined"
        size="small"
        color="success"
        className="new-playist"
        onClick={() => {
          setPlaylist({ ...playlist, modal: true });
        }}
      >
        <span>Create New Playlist</span>
      </Button>
      <br></br>
      <Modal
        show={playlist.modal}
        close={() => {
          setPlaylist({ ...playlist, modal: false });
        }}
      >
        <form onSubmit={addPlaylist}>
          <div className="title">New Playlist</div>

          <div className="content-wrap">
            <input
              className="inputTitle"
              type="text"
              placeholder="My Playlist"
              ref={playlistRef}
              required
            />
            <br />
            <Button
              variant="outlined"
              size="small"
              color="success"
              className="buttonPlaylist"
              type="submit"
            >
              Create
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CreatePlaylist;
