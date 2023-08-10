import Body from './components/Body';
import './styles/App.css';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
function App() {

 
  return (
    <div className="Main">
<div className='App-main'>
<Topbar/>

<div className='App'>
<Navbar/>
<Body/>
</div>

</div>
       
    </div>
  );
}

export default App;
