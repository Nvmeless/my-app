import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import { Basic } from './components/templates/basic/Basic';
import {store} from './store'
function App() {
  return (
    <Provider store={store} >
    <div className="App">
      <Basic></Basic>
    </div>
    </Provider>
  );
}

export default App;
