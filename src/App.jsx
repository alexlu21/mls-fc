import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/comunes/Navbar.jsx'
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Team from './components/Team.jsx';
import UpdatePerson from './components/UpdatePerson.jsx';
import InfoPersona from './components/InfoPersona.jsx';

function App() {

  return (
    <Router>
      <div className='app'>
        <div className='content'>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/team' element={<Team/>}/>
            <Route path='/update/:id_persona' element={<UpdatePerson/>}/>
            <Route path='/info/:id_persona' element={<InfoPersona/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
