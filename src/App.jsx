import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Provider} from 'react-redux';
import Home from './Components/Home';
import Cart from './Components/Cart';
import {store} from './Components/Store'
import Menu from './Components/Menu';
function App() {
  return (
    <div>
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
           <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
    </Provider>
    </div>
  );
}

export default App;
