import Login from '../../components/navbar/login'
import './style.css'
import React from 'react'
const LoginPage = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>Spotify</h1>
      </div>
      <div className="card-login">
        <div className="login-button">
          <Login />
        </div>
      </div>
    </div>
  )
}
export default LoginPage
