
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Button from './components/Button';
import Categories from './components/Categories';
import Countup from './components/CountUp';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
<>
<Navbar/>
<Button/>
<Categories/>
<Products/>
<Countup/>
</>
  );
}

export default App;
