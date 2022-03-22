import axios from 'axios';
import { Component, Fragment, useState} from 'react';

import './App.css';

class AlbumImage extends Component {

  state={
    artists :[],
    album:[]
  }
  componentDidMount(){
    const url= "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"
    axios({
      method:'get',
      url : url
    })
      .then(dataapi =>{
        console.log(dataapi.data.album)
        this.setState({
          artists:dataapi.data.album.artists,
          album:dataapi.data.album
        })
      })
    .catch(err=>console.log(err))
}

  render() {

    return (
      <Fragment>
        <div id="card">
          <div className='header'>
            
          </div>
          <div className="container">
            <div>
              <img src="https://picsum.photos/400/300" className="image-song" alt=""></img>
            </div>
            <div className="title">
            {/* {this.state.album.map((row,index)=>{
                return(
                  <div>
                    <h2>{row.name}</h2>
                  </div>
                )
              })} */}
            </div>
            <div className="artist">
            {this.state.artists.map((row,index)=>{
                return(
                  <div>
                    <h2>{row.name}</h2>
                  </div>
                )
              })}
            </div>

            <div className="albums">
              Tujuh Belas
            </div>

            <div className="btn">
              <span>
                <i> Album Details </i>
              </span>
            </div>
          </div>
        </div>

      </Fragment>
    )
  }
}

function App() {
  return (
    <div className="App">
      <div className='row'>
        <AlbumImage />
      </div>
    </div>
  );
}

export default App;
