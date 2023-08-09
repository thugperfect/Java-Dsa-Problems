import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
var i = 1;
  const [click,setclick] = useState(false)
  const handleclick = () =>{
    setclick(!click);
    console.log(click);
   
  }
  return (
    <div className="App">
      <div className={(click) ? "navbar-wrapper-change" : "navbar-wrapper"} >
      <div onClick={handleclick} className='navbar-back-btn'></div>
      </div>
      <div className="body"></div>
    </div>
  );
}

export default App;
