// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Table } from "react-bootstrap";
import { Component } from "react";
import { Button } from "react-bootstrap";
import Style from "./style.module.css";

import CardMaster from "../../card-song/card-master";
import SelectSong from "../../card-song/select-song";

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    search: "",
    data: [],
  };

  getSpotify = () => {
    fetch(
      `https://api.spotify.com/v1/search?q=${this.state.search}&type=track&limit=10&access_token=${this.props.accessToken}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          data: data.tracks.items,
        });
      });
  };

  // to handle the search input
  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  // to handle the search button
  handleSubmit = (event) => {
    event.preventDefault();
    this.getSpotify();
  };

  render() {
    return (
      <div className={Style.container}>
        <form nameName={Style.search}>
          <input
            type="text"
            className={Style.input}
            name="txt"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button
            className={Style.button}
            type="submit"
            onClick={this.handleSubmit}
          >
            Search
          </button>
        </form>
        <div className={Style.title}>
          <h3>Table Tracks and Card Tracks</h3>
        </div>
        <div className={Style.table}>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Song image</th>
                <th>Song</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Add</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((song, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <img src={song.album.images[2].url} />
                  </td>
                  <td>{song.name}</td>
                  <td>{song.artists[0].name}</td>
                  <td>{song.album.name}</td>
                  <td>
                    <SelectSong song={song} onClick={this.getSelected} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={Style.card}>
          {this.state.data.map((song, index) => (
            <CardMaster
              key={index}
              song={song.album.images[1].url}
              artist={song.name}
              title={song.album.name}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SearchBar;
