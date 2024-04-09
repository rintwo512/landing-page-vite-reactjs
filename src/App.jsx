
import { Routes, Route } from 'react-router-dom'

import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'

import Home from './pages/Home'
import Kelas from './pages/Kelas'
import Syarat from './pages/Syarat'
import Testimonial from './pages/Testimonial'
import FaqPage from './pages/FaqPage'

function App() {
  return <div>
    <NavbarComponent />
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/kelas" Component={Kelas} />
      <Route path="/testimonial" Component={Testimonial} />
      <Route path="/faq" Component={FaqPage} />
      <Route path="/syaratketen" Component={Syarat} />
    </Routes>
    <FooterComponent />
  </div>;
}

export default App
