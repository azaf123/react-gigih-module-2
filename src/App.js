import { Component, Fragment } from 'react';
import './App.css';

class AlbumImage extends Component{
  render(){
    return(
      <Fragment>
        <img src="https://picsum.photos/400/300" className="image-song" alt=""></img>
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
