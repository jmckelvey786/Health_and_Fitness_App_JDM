import logo from './logo.svg';
import './components/main.css'
import Footer from "./components/footer"
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <div className='bg-color-darkblue VH-100 flex justify-content-center'>
      <div><h1 className='color-offwhite'>Health & Fitness Application</h1></div>
      
      <Footer />
    </div>
  );
}

export default App;
