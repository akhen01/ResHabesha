import './App.css'
import Header from './pages/header/Header'
import Footer from './pages/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function App() {

  
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-bgCutsom">
        <div className="w-full block">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
        <div className="w-full block">
            <Footer />
        </div>
    </div>
  )
}

export default App
