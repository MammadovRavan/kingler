
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './components/Home';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './components/NotFound';
import About from './components/About';


function App() {
  return (
<>
<BrowserRouter>
<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/error' element={<NotFound/>}/>
<Route path='*' element={<NotFound/>}/>
<Route path='/about' element={<About/>}/>


</Routes>

</BrowserRouter>
</>
  );
}

export default App;
