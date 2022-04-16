import './style.css';
import React from 'react';
import Navbar from '../../components/navbar/navbar-master';
import CardPlaylist from '../../components/card-playlist';
import SearchHook from '../../components/navbar/searchHook/index';

function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <body>
        <div className="cardPlaylist">
          <CardPlaylist />
        </div>
        <div className="search-song">
          <SearchHook />
        </div>
      </body>
    </>
  );
}

export default Home;
