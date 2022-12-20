import { lazy,Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const Comic = lazy(() => import('pages/Comic/Comic'))
const ContactUs = lazy(() => import('pages/ContactFrom/ContactUs'))
const Project1 = lazy(() => import('pages/Projects/Project1'))
const Home = lazy(() => import('pages/Home/Home'))
const TAV = lazy(() => import('pages/TAV/TAV'))
const Isekai = lazy(() => import('pages/Isekai/Isekai'))
const Services = lazy(() => import('pages/Services/Services'))

function App() {
  return (
    <>
    <Suspense fallback={()=><h1>loading....</h1>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/isekai" element={<Isekai />} />
          <Route path="/comics" element={<Comic />} />
          <Route path="/isekai/project1" element={<Project1 />} />
          <Route path="/tav" element={<TAV />} />
          <Route path="/services" element={<Services />} />
          <Route path="/upload" element={<ContactUs />} />
        </Routes>
      </Router>
    </Suspense>
    </>
  )
}

export default App
