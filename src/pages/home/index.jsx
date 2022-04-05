import Style from "./style.module.css";
import Navbar from "../../components/navbar/navbar-master";
import CardPlaylist from "../../components/card-playlist";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";



const Home = () => {
  // state = {
  //     accessToken: window.location.hash
  //         .substring(1, window.location.hash.length - 1)
  //         .split("&")[0]
  //         .split("=")[1],

  // }
  const [selected, setSelected] = useState([]);
  // const [accessToken, setAccessToken] = useState("");
  // useEffect(() => {
  //   const hash = window.location.hash
  //     .substring(1, window.location.hash.length - 1)
  //     .split("&")[0]
  //     .split("=")[1];
  //   setAccessToken(hash);
  // }, []);

  // from redux
  const accessToken = useSelector(state => state.token.token);

  console.log(accessToken);
  return (
    <>
      <header>
        <Navbar selected={selected} setSelected={setSelected} />
      </header>
      <body>
        {accessToken ? (
          <>
          
            <div className="cardPlaylist">
              <CardPlaylist accessToken={accessToken} selected={selected} setSelected={setSelected}/>
            </div>
            
          </>
        ) : (
          <h1>Please Login</h1>
        )}
      </body>
    </>
  );
};

export default Home;
