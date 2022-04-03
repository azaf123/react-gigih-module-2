
import { Component } from 'react'
import './style.css'

const AUTH_URL = 'https://accounts.spotify.com/authorize'
const client_id = `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}`
const redirect_uri = 'http://localhost:3000/'
const scopes = 'user-read-private user-read-email playlist-modify-private playlist-read-private playlist-modify-public playlist-read-collaborative user-read-playback-state user-modify-playback-state user-read-currently-playing user-read-recently-played user-top-read user-follow-read user-follow-modify user-library-read user-library-modify'
const url = `${AUTH_URL}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes}&response_type=token&show_dialog=true`


class Login extends Component {

    // to handle the login button
    handleLogin = () => {
        window.open(url)
    }

    render() {
        return (
            <div className='container'>
                <div className='login'>
                <form>
                    <div className="buttonLogin">
                        <button onClick={this.handleLogin}>Spotify Login</button>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default Login;