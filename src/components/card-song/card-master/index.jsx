import React from 'react';
import SongImage from '../song-image';
import SongInfo from '../song-info';
import SelectSong from '../select-song';
// import data from "../../../data"
import dataloop from '../../../dataloop';
import Style from './style.module.css';
// eslint-disable-next-line react/prop-types
function CardMaster({ song, artist, title }) {
  return (
    <div className={Style.container}>
      <div className={Style.card}>
        {/* mapping dataloop */}
        {/* {dataloop.map((song,index) => (
                    <div className={Style.cardContent}>
                        <SongImage key={index} song={song.album.images[1].url} />
                        <SongInfo SongTitle={song.name} SongArtist={song.artists[0].name} />
                        <SelectSong />
                    </div>
                ))} */}
        {/* nomapping */}
        {/* <SongImage song={data.album.images[1].url} />
                <SongInfo SongTitle={data.album.name} SongArtist={data.artists[0].name} />
                <SelectSong />
                    */}
        <div className={Style.cardContent}>
          <SongImage song={song} />
          <SongInfo SongArtist={artist} SongTitle={title} />
          <SelectSong />
        </div>
      </div>
    </div>
  );
}
export default CardMaster;
