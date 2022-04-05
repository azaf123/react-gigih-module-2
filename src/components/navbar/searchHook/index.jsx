import { useEffect, useState, useCallback } from "react";
import Style from "./style.module.css";
import SongTable from "../../table-song";
import CardPlaylist from "../../card-playlist";
import { useSelector } from "react-redux";

const SearchHook = ({selected,setSelected }) => {
  const accessToken = useSelector(state => state.token.token);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  // useEffect(() =>
  //  {
  //     console.log('token '+ accessToken)
  // }, [])

  const getData = () => {
    fetch(
      "https://api.spotify.com/v1/search?q=" +
        search +
        "&type=track&limit=10&access_token=" +
        accessToken
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.tracks.items);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
        console.log(err);
      });
  };

  // handle the search input
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  // handle the search button
  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
    setIsLoading(true);
  };
  const handleSongSelected = (uri) => {
    setSelected([...selected, uri]);
  };

  const handleSongDeselected = (uri) => {
    setSelected(selected.filter((song) => song !== uri));
  };

  console.log(selected);

  return (
    <div>
      <h1>Search</h1>
      <input type="text" value={search} onChange={handleSearch} />
      <button onClick={handleSubmit}>Search</button>
        {isLoading ? (
            <div>Loading...</div>
        ) : isError ? (
            <div>Error</div>
        ) : (<>
            <SongTable
                data={data}
                selected={selected}
                handleSongSelected={handleSongSelected}
                handleSongDeselected={handleSongDeselected}
            />

          </>
        )}

    </div>
  );
};

export default SearchHook;
{
  /* <div>
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
      {data.map((song, index) => (
        <tr key={song.id}>
          <td>{index + 1}</td>
          <td>
              <img
                  src={song.album.images[0].url}
                  alt={song.name}
                  width="50"
                  height="50"
              />                 
          </td>
          <td>{song.name}</td>
          <td>{song.artists[0].name}</td>
          <td>{song.album.name}</td>
          <td>
            {selected.includes(song.uri) ? (
              <DeselectSong
                songSelected={selected}
                setSongDeselected={()=>handleSongDeselected(song.uri)}
              />
            ) : (
              <SelectSong
                songSelected={selected}
                setSongSelected={() => handleSongSelected(song.uri)}
              />
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div> */
}
