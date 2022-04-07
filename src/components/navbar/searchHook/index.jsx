import { useEffect, useState, useCallback } from "react";
import "./style.css";
import SongTable from "../../table-song";
import { useSelector } from "react-redux";

const SearchHook = ({selected,setSelected }) => {
  const accessToken = useSelector(state => state.token.token);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
useEffect(() => {
  fetch(
    "https://api.spotify.com/v1/search?q=tulus&type=track&limit=10&access_token=" + accessToken
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
}, [search]);
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

  console.log(search);

  return (
    <>
    <div className="container">
      <hr />
    <div className="title">
                <h1>Search Song</h1>
              </div>
      <form onSubmit={handleSubmit}>
    <div class="level-item">
      <div class="field has-addons">
        <p class="control">
        <input className="input" type="text" value={search} onChange={handleSearch} />
        </p>
        <p class="control">
        <button className="button">Search</button>
        </p>
      </div>
    </div>
    </form>
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
    </>
  );
};

export default SearchHook;