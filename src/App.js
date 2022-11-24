import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Basic } from './components/templates/basic/Basic';
import getTheme from './theme/getTheme'
import {store} from './store'
function App() {
  return (
    <Provider store={store} >
    <ThemeProvider theme={getTheme()}>
    <div className="App">
      <Basic></Basic>
    </div>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
