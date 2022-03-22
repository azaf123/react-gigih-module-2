import axios from 'axios';
import { Component, Fragment, useState} from 'react';
import data from './data';
import './App.css';

class AlbumImage extends Component {

  componentDidMount(){
    try{
      console.log(data);
      const imgAlbum = document.getElementById("image-song");
      const albumTitle = document.getElementById("title");
      const artistName = document.getElementById("artist");
  
      imgAlbum.src = data.album.images[1].url;
      albumTitle.innerText = data.album.name;
      artistName.innerText = data.artists[0].name;
     
      
    }
    catch(err){
      alert(err.message);
    }
      
}

  render() {

    return (
      <Fragment>
        <div id="card">
          <div className='header'>
            
          </div>
          <div className="container">
            <div>
              <img src="#" id="image-song" alt=""></img>
            </div>
            <div id="title">
            
            </div>
            <div id="artist">
            
            </div>
            <div id="select">
              <select>
                <option value="">Select a song</option>
              </select>
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
