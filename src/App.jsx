import { Route, Routes } from 'react-router-dom'; // ✅ Remove BrowserRouter
import AboutUs from './AboutUs';
import Contact from './Contact';
import Gallery from './Gallery';
import Home from './Home';
import ServicesPage from './SevicesPage';

function App() {
  return (
    <Routes>
      <Route path="/" exact Component={Home} />
      <Route path="/AboutUs" exact Component={AboutUs} />
      <Route path="/Services" exact Component={ServicesPage} />
      <Route path="/Gallery" exact Component={Gallery} />
      <Route path="/Contact" exact Component={Contact} />
    </Routes>
  );
}

export default App;
