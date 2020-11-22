import './App.css';
import Header from '../src/Components/Header/Header.jsx'
import Footer from '../src/Components/Footer/Footer.jsx'
import About from '../src/Screens/About/About.jsx'
import Map from '../src/Components/Map/Map.jsx'
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      {/* <h1>Oh no</h1> */}
      <Route path exact='/'>
        <Map />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
    <Footer />
    </>
  );
}

export default App;
