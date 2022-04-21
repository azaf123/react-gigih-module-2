import './App.css';
import 'bulma/css/bulma.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import store from './redux/store';
import Routers from './routers';
import Theme from './theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <div className="App">
          <Routers />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
