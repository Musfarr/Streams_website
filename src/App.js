
import './css/style.css'
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './pages/Home'
import Service from './pages/Service'
import Contact from './pages/Contact'
import About from './pages/about';

import 'rsuite/dist/rsuite.min.css';
import 'uikit/dist/css/uikit.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Router>
    <Routes>
      <Route path="/" element={<div> <Header /> <Home /> <Footer/> </div>}/>
      <Route path="/services" element={<div> <Header /> <Service /> <Footer/> </div>}/>
      <Route path="/contact" element={<div> <Header /> <Contact /> <Footer/> </div>}/>
      <Route path="/about" element={<div> <Header /> <About /> <Footer/> </div>}/>

    </Routes>
  </Router>
  );
}

export default App;
