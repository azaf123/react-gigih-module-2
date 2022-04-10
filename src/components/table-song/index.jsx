/* eslint-disable react/prop-types */
import SelectSong, { DeselectSong } from '../card-song/select-song'
import React from 'react'
import Style from './style.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { handleSongSelected, handleSongDeselected } from '../../redux/slices/songSlice'
const SongTable = () => {
  const selected = useSelector(state => state.song.selected)
  const data = useSelector(state => state.song.data)
  const dispatch = useDispatch()
  return (
    <div>
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
                    {selected.includes(song.uri)
                      ? (
                        <DeselectSong
                            setSongDeselected={() => dispatch(handleSongDeselected({ uri: song.uri }))}
                        />
                        )
                      : (
                        <SelectSong
                            setSongSelected={() => dispatch(handleSongSelected({ uri: song.uri }))}
                        />
                        )}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default SongTable
