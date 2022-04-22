/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/button-has-type */
/* eslint-disable camelcase */

import './style.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { setAccessToken } from '../../../redux/slices/tokenSlice';

const AUTH_URL = 'https://accounts.spotify.com/authorize';
const client_id = `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}`;
const redirect_uri = 'https://react-gigih-module-2-test.vercel.app/';
const scopes = 'user-read-private user-read-email playlist-modify-private playlist-read-private playlist-modify-public playlist-read-collaborative user-read-playback-state user-modify-playback-state user-read-currently-playing user-read-recently-played user-top-read user-follow-read user-follow-modify user-library-read user-library-modify';
const url = `${AUTH_URL}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes}&response_type=token&show_dialog=true`;

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  // to handle the login button
  const handleLogin = () => {
    window.open(url);
  };

  const accessTokenFromUrl = window.location.hash
    .substring(1, window.location.hash.length - 1)
    .split('&')[0]
    .split('=')[1];

  if (accessTokenFromUrl) {
    dispatch(setAccessToken({ accessToken: accessTokenFromUrl }));
    history.push({
      pathname: '/create-playlist',
    });
  }
  console.log(accessTokenFromUrl);
  return (
    <div className="container">
      <div className="login">
        <form>
          <div className="btn-grad">
            <button onClick={() => handleLogin()}>LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
