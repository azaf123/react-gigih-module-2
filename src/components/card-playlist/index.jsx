/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Box, CardContent, Typography } from '@mui/material';
import { RootState } from '../../redux/store';

function CardPlaylist() {
  const accessToken = useSelector((state: RootState) => state.token.accessToken);
  const selected = useSelector((state: RootState) => state.song.selected);
  const [playlist, setPlaylist] = useState({
    namePlaylist: '',
    descriptionPlaylist: '',
  });
  const [hasError, setErrors] = useState(false);
  const [playlistData, setPlaylistData] = useState([]);
  const [playlistID, setplaylistID] = useState('');

  // get data playlist
  const getPlaylist = () => {
    axios
      .get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        console.log(`playlist${res.data.items}`);
        setPlaylistData(res.data.items);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // post data playlist

  const postData = async () => {
    await axios
      .post(
        'https://api.spotify.com/v1/users/31hrne4yvy6qretxcpgpxj5cnrsi/playlists',

        {
          name: playlist.namePlaylist,
          description: playlist.descriptionPlaylist,
          public: false,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      .then((res) => {
        console.log(res.data);
        setplaylistID(res.data.id);
        return alert('Playlist created');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // add song to playlist
  const addSong = () => {
    axios
      .post(
        `https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
        {
          uris: selected,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    addSong();
  }, [playlistID]);

  useEffect(() => {
    getPlaylist();
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const errors = { ...playlist };

    if (errors.namePlaylist.length <= 10) {
      return alert('Minimum 10 characters for name of playlist');
    }
    postData();
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setPlaylist({
      ...playlist,
      [name]: value,
    });
    const errors = { ...playlist };
    if (errors.namePlaylist.length <= 10) {
      setErrors({
        ...errors,
        namePlaylist: 'Minimum 10 characters',
      });
    } else {
      setErrors({
        ...errors,
        namePlaylist: '',
      });
    }
  };

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-two-fifths">
          <div className="create-playlist box">
            <div className="title">
              <h1>Create playlist</h1>
            </div>
            <div className="form-playlist">
              <form onSubmit={handleFormSubmit}>
                <div className="playlistName field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      required
                      name="namePlaylist"
                      type="text"
                      placeholder="Name playlist"
                      value={playlist.namePlaylist}
                      onChange={handleFormChange}
                    />
                    {hasError.namePlaylist && (
                      <p className="error">{hasError.namePlaylist}</p>
                    )}
                  </div>
                </div>
                <div className="playlistDescription field">
                  <label className="label">Description</label>
                  <div className="control">
                    <input
                      className="input"
                      name="descriptionPlaylist"
                      type="text"
                      placeholder="Description"
                      value={playlist.descriptionPlaylist}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>
                <button className="button is-link" onClick={getPlaylist}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="column is-one-fifth">
          <div className="get-playlist box">

            <div className="title">
              <Typography variant="h3" component="h2">My Playlist</Typography>
            </div>
            <button className="button is-primary" onClick={getPlaylist}>
              Show Playlist
            </button>
          </div>
        </div>
      </div>
      <div className="column is-three-half">
        <hr />
        <div className="playlist-data-title">
          <Typography variant="h2" component="h2">My Playlist</Typography>
        </div>
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1.0)' }}
        >
          <CardContent>
            {playlistData.map(
              (item) => item.tracks.total >= 0
            && (console.log(item),
            (
              <div className="playlist-data">
                <div className="box myplaylist" key={item.id}>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{item.name}</Typography>
                  <p>{item.description}</p>
                  <p>{`${item.tracks.total} songs`}</p>
                </div>
              </div>
            )),
            )}
          </CardContent>
        </Box>
      </div>
    </div>
  );
}
export default CardPlaylist;
