import axios from 'axios';
import { Component, Fragment, useState} from 'react';
import './App.css';
import Home from './pages/home';
// class AlbumImage extends Component {

//   componentDidMount(){
//     try{
//       console.log(data);
//       const imgAlbum = document.getElementById("image-song");
//       const albumTitle = document.getElementById("title");
//       const artistName = document.getElementById("artist");
  
//       imgAlbum.src = data.album.images[1].url;
//       albumTitle.innerText = data.album.name;
//       artistName.innerText = data.artists[0].name;
     
      
//     }
//     catch(err){
//       alert(err.message);
//     }
      
// }

//   render() {

//     return (
//       <Fragment>
//         <div id="card">
//           <div className='header'>
            
//           </div>
//           <div className="container">
//             <div>
//               <img src="#" id="image-song" alt="">
//                 {/* image */}
//               </img>
//             </div>
//             <div id="title">
//             {/* title */}
//             </div>
//             <div id="artist">
//             {/* artist name */}
//             </div>
//             <div id="select">
//               <select>
//                 <option value="">Select a song</option>
//               </select>
//             </div>
//           </div>
//         </div>

//       </Fragment>
//     )
//   }
// }

function App() {
  return (
    <div className="App">      
    <Home />
    </div>
  );
}

export default App;
