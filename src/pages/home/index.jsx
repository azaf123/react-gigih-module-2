import "./style.css";
import Navbar from "../../components/navbar/navbar-master";
import CardPlaylist from "../../components/card-playlist";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SearchHook from '../../components/navbar/searchHook'
import { setRemoveAccessToken } from "../../redux/slices/tokenSlice";

const Home = () => {
  // state = {
  //     accessToken: window.location.hash
  //         .substring(1, window.location.hash.length - 1)
  //         .split("&")[0]
  //         .split("=")[1],

  // }
  const [selected, setSelected] = useState([]);
  // from redux
  const accessToken = useSelector((state) => state.token.token);

  console.log(accessToken);
  return (
    <>
      <header>
        <Navbar selected={selected} setSelected={setSelected} />
      </header>
      <body>
        <>
          <div className="cardPlaylist">
            <CardPlaylist selected={selected} setSelected={setSelected} />
          </div>
          <div className="search-song">
          <SearchHook selected={selected} setSelected={setSelected} />
          </div>
        </>
      </body>
    </>
  );
};

export default Home;
