import Project1 from 'pages/Projects/Project1'
import './App.css'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'; 
import Comic from 'pages/Comic/Comic';
import ContactUs from 'pages/ContactFrom/ContactUs';
import Home from 'pages/Home/Home';
import TAV from 'pages/TAV/TAV';
import Isekai from 'pages/Isekai/Isekai';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Isekai />}  />
        <Route path='/project1' element={<Project1 />}  />
        <Route path='/comics' element={<Comic />}  />
        <Route path='/contact' element={<ContactUs />}  />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
