import logo from './logo.svg';
import './components/main.css'
import Footer from "./components/footer"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/home';

function App() {
  return (
    <Router>
    <div className='bg-color-darkblue VH-100 flex justify-content-center'>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
