
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Business from './components/Business';
import Button from './components/Button';
import Categories from './components/Categories';
import Countup from './components/CountUp';
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
</>
  );
}

export default App;
