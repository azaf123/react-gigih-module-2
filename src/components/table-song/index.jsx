/* eslint-disable react/prop-types */
import SelectSong, { DeselectSong } from '../card-song/select-song'
import React from 'react'
import Style from './style.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  handleSongSelected,
  handleSongDeselected
} from '../../redux/slices/songSlice'
const SongTable = () => {
  const selected = useSelector((state) => state.song.selected)
  const data = useSelector((state) => state.song.data)
  const dispatch = useDispatch()
  return (
    <div>
      <div className={Style.title}>
        <h3>Table Tracks and Card Tracks</h3>
      </div>
      {data.map((song) => (
        <div className={Style.container} box key={song.id}>
          <div className="boxi">
            <div className={Style.image}>
              <img src={song.album.images[1].url} alt={song.name} />
            </div>
          </div>
          <div className={Style.info}>
              <p>{song.name}</p>
              <p> {song.artists[0].name}</p>
              <p>{song.album.name}</p>
            </div>
          <div className={Style.button}>
            {selected.includes(song.uri)
              ? (
              <DeselectSong
                setSongDeselected={() =>
                  dispatch(handleSongDeselected({ uri: song.uri }))
                }
              />
                )
              : (
              <SelectSong
                setSongSelected={() =>
                  dispatch(handleSongSelected({ uri: song.uri }))
                }
              />
                )}
          </div>
        </div>
      ))}
    </div>
  )
}
export default SongTable
// {/* <div className={Style.table}>
// <table>
//   <thead>
//     <tr>
//       <th>#</th>
//       <th>Song image</th>
//       <th>Song</th>
//       <th>Artist</th>
//       <th>Album</th>
//       <th>Add</th>
//     </tr>
//   </thead>

//   <tbody>
//     {data.map((song, index) => (
//       <tr key={song.id}>
//         <td>{index + 1}</td>
//         <td>
//           <img
//             src={song.album.images[0].url}
//             alt={song.name}
//             width="50"
//             height="50"
//           />
//         </td>
//         <td>{song.name}</td>
//         <td>{song.artists[0].name}</td>
//         <td>{song.album.name}</td>
//         <td>
//             {selected.includes(song.uri)
//               ? (
//                 <DeselectSong
//                     setSongDeselected={() => dispatch(handleSongDeselected({ uri: song.uri }))}
//                 />
//                 )
//               : (
//                 <SelectSong
//                     setSongSelected={() => dispatch(handleSongSelected({ uri: song.uri }))}
//                 />
//                 )}

//         </td>
//       </tr>
//     ))}
//   </tbody>
// </table>
// </div> */}
