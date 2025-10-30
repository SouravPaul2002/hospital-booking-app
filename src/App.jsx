import './App.css'
import { BrowserRouter } from "react-router-dom";
import Header from './frontend/component/Header'
import Footer from './frontend/component/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div>hello</div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
