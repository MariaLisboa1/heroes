import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import { blueGrey } from '@material-ui/core/colors';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

import history from './services/history';
import store from './store';

const themeColor = createMuiTheme({
  palette: {
    primary: blueGrey,
  },
});

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <MuiThemeProvider theme={themeColor}>
          <Header />
          <Footer />
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </MuiThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
