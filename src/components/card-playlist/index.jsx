import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import axios from "axios";

const CardPlaylist = ({ accessToken, selected }) => {
  const [playlist, setPlaylist] = useState({
    namePlaylist: "",
    descriptionPlaylist: "",
  });
  const [hasError, setErrors] = useState(false);
  const [playlistData, setPlaylistData] = useState([]);
  const [playlist_id, setPlaylist_id] = useState("");

  // get data playlist
  const getPlaylist = () => {
    axios
      .get(`https://api.spotify.com/v1/me/playlists`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        console.log(res.data);
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
        "https://api.spotify.com/v1/users/31hrne4yvy6qretxcpgpxj5cnrsi/playlists",

        {
          name: playlist.namePlaylist,
          description: playlist.descriptionPlaylist,
          public: false,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setPlaylist_id(res.data.id);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // add song to playlist
  const addSong = () => {
    axios
      .post(
        `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
        {
          uris: selected,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
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
  }, [playlist_id]);

  useEffect(() => {
    getPlaylist();
  }, []);


  const handleFormSubmit = (event) => {
    event.preventDefault();

    const errors = { ...playlist };
    if (errors.namePlaylist.length <= 10) {
      setErrors({
        ...errors,
        namePlaylist: "Minimum 10 characters",
      });
    } else {
      setErrors({
        ...errors,
        namePlaylist: "",
      });
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
        namePlaylist: "Minimum 10 characters",
      });
    } else {
      setErrors({
        ...errors,
        namePlaylist: "",
      });
    }
  };

  return (
    <>
      <div className="container">
        <h4>1. You can search first the song in the searchbar</h4>
        <h4>2. You can add the song to the playlist</h4>
        <h4>3. You can create a new playlist</h4>
        <h4>4. You can click get playlis button on the left to check your playlist that you have created</h4>
        <h4>4. You can see the playlist</h4>
        
        <div className="row">
          <div className="col-lg-6">
            <div className="card-playlist">
              <div className="title">
                <h1>My Playlist</h1>
              </div>
              <Button variant="primary" onClick={getPlaylist}>
                Get playlist
              </Button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="playlist">
              <div className="title">
                <h1>Create playlist</h1>
              </div>
              <div className="form">
                <form onSubmit={handleFormSubmit}>
                  <div className="playlistName">
                    <label>Name</label>
                    <input
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
                  <div className="playlistDescription">
                    <label>Description</label>
                    <input
                      name="descriptionPlaylist"
                      type="text"
                      placeholder="Description"
                      value={playlist.descriptionPlaylist}
                      onChange={handleFormChange}
                    />
                  </div>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>{" "}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="playlist-data-title">
          <br></br>
          <br></br>
          <br></br>
          <h5>Playlist</h5>
          
        </div>
        {playlistData.map(
          (item, index) =>
            item.tracks.total >= 0 && (
              <div className="playlist-data">
                <div key={index}>
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                  <p>{item.tracks.total}</p>
                  <Button variant="primary" onClick={addSong}>
                    Add song
                  </Button>
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
};
export default CardPlaylist;
