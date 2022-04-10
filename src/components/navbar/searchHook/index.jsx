/* eslint-disable no-const-assign */
import React, { useEffect } from 'react'
import './style.css'
import SongTable from '../../table-song'
import { useSelector, useDispatch } from 'react-redux'
import { setSearch, setData, setIsError, setIsLoading } from '../../../redux/slices/songSlice'

const SearchHook = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector(state => state.token.token)
  const selected = useSelector(state => state.song.selected)
  const search = useSelector(state => state.song.search)

  const isLoading = useSelector(state => state.song.isLoading)
  const isError = useSelector(state => state.song.isError)
  useEffect(() => {
    fetch(
      'https://api.spotify.com/v1/search?q=tulus&type=track&limit=10&access_token=' + accessToken
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(setData({ data: data.tracks.items }))
        dispatch(setIsLoading({ isLoading: false }))
      })
      .catch((err) => {
        dispatch(setIsError({ isError: true }))
        dispatch(setIsLoading({ isLoading: true }))
        console.log(err)
      })
  }, [search])
  const getData = () => {
    fetch(
      'https://api.spotify.com/v1/search?q=' +
        search +
        '&type=track&limit=10&access_token=' +
        accessToken
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(setData({ data: data.tracks.items }))

        dispatch(setIsLoading({ isLoading: false }))
      })
      .catch((err) => {
        dispatch(setIsError({ isError: true }))
        dispatch(setIsLoading({ isLoading: true }))
        console.log(err)
      })
  }

  // handle the search input
  const handleSearch = (event) => {
    dispatch(setSearch({ search: event.target.value }))
  }
  // handle the search button
  const handleSubmit = (event) => {
    event.preventDefault()
    getData()
    setIsLoading(true)
  }
  // const handleSongSelected = (uri) => {
  //   dispatch(setSelected({ selected: [...selected, uri] }))
  // }

  // const handleSongDeselected = (uri) => {
  //   dispatch(setSelected({ selected: selected.filter((song) => song !== uri) }))
  // }

  console.log(search)
  console.log(selected)

  return (
    <>
    <div className="container">
      <hr />
    <div className="title">
                <h1>Search Song</h1>
              </div>
      <form onSubmit={handleSubmit}>
    <div className="level-item">
      <div className="field has-addons">
        <p className="control">
        <input className="input" type="text" value={search} onChange={handleSearch} />
        </p>
        <p className="control">
        <button className="button">Search</button>
        </p>
      </div>
    </div>
    </form>
        {isLoading
          ? (
            <div>Loading...</div>
            )
          : isError
            ? (
            <div>Error</div>
              )
            : (<>
            <SongTable
            />

          </>
              )}
</div>
    </>
  )
}

export default SearchHook
