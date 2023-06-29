
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Business from './components/Business';
import Button from './components/Button';
import Categories from './components/Categories';
import Collection from './components/Collection';
import Countup from './components/CountUp';
import Footer from './components/Footer';
import GunsAmmo from './components/GunsAmmo';
import Navbar from './components/Navbar';
import PopularNews from './components/PopularNews';
import Products from './components/Products';

function App() {
  return (
<>
<Navbar/>
<Button/>
<Categories/>
<Products/>
<Countup/>
<GunsAmmo/>
<PopularNews/>
<Business/>
<Collection/>
<Footer/>
</>
  );
}

export default App;
