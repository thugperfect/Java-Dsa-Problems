import logo from './logo.svg';
import './styles/App.css';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
function App() {

 
  return (
    <div className="Main">

   <Topbar/>

      <div className='App'>
      <Navbar/>
      <div className="body"></div>
      </div>
    
    </div>
  );
}

export default App;
