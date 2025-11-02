import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './frontend/component/Header'
import Footer from './frontend/component/Footer';
import Home from './frontend/page/Home';
import Hospitals from './frontend/page/Hospitals';
import Book from './frontend/page/Book';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/hospitals' element={<Hospitals />} />
            <Route path='/book' element={<Book />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
