import './style.css'
import Navbar from '../../components/navbar/navbar-master'
import CardPlaylist from '../../components/card-playlist'
import React, { useState } from 'react'
import SearchHook from '../../components/navbar/searchHook'

const Home = () => {
  const [selected, setSelected] = useState([])
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
  )
}

export default Home
