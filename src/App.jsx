
import './App.css';

import 'bulma/css/bulma.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routers from './routers';
import SearchHook from './components/navbar/searchHook';
import Home from './pages/home';

function App() {
  return (

    <Provider store={store} >
    <div className="App">     
      <Routers />
      {/* <Home/> */}
    </div>
      </Provider>
  );
}

export default App;
