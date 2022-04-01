import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect, useState, useCallback } from "react";
import Style from "./style.module.css";
import CardMaster from "../../card-song/card-master";
import SelectSong from "../../card-song/select-song";

const SearchHook = ({ accessToken }) => {

    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [selected, setSelected] = useState([]);



    // useEffect(() =>
    //  {
    //     getData();
    //     console.log(data);
    // }, [])

    const getData =
        () => {

            fetch('https://api.spotify.com/v1/search?q=' + search + '&type=track&limit=10&access_token=' + accessToken
            )
                .then(res => res.json())
                .then(data => {

                    setData(data.tracks.items);
                    setIsLoading(false);
                })
                .catch(err => {
                    setIsError(true);
                    setIsLoading(false);
                    console.log(err);
                })
        }

    // handle the search input
    const handleSearch = (event) => {
        setSearch(event.target.value);

    }
    // handle the search button
    const handleSubmit = (event) => {
        event.preventDefault();
        getData();
        setIsLoading(true);

    }


    return (

        <div>
            <h1>Search</h1>
            <input type="text" value={search} onChange={handleSearch} />
            <button onClick={handleSubmit}>Search</button>
            {isLoading ? <h1>Loading...</h1> : <div>
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
                                        <img src={song.album.images[2].url}></img>
                                    </td>
                                    <td>{song.name}</td>
                                    <td>{song.artists[0].name}</td>
                                    <td>{song.album.name}</td>
                                    <td>
                                        {selected.includes(song.uri) ? <button className={Style.ButtonDeselect} onClick={() => setSelected(selected.filter(uri => uri !== song.uri))}>
                                            Deselect
                                        </button> :
                                            <button className={Style.ButtonSelect} onClick={() => setSelected([...selected, song.uri])}>Select</button>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


         
                <div>
                    {isError ? <h1>No Song Data</h1> : null}
                </div>
            </div>}



        </div>

    );
}

export default SearchHook;
