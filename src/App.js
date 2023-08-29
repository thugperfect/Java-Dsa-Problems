import Body from './components/Body';
import './styles/App.css';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import FirstJava from './topics/FirstJava';
import BodyMain from './components/BodyMain';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';

import All from './topics/All';
import New from './New';

import { useState } from "react"
function App() {

  const [topic,changeTopic] = useState(<FirstJava/>)

  const handleTopicChange = (newTopic) =>{
    changeTopic(newTopic)
  }

  const handleProgramChange = (newProgram) =>{
    changeTopic(newProgram)
  }
  return (
    <Router>
        <Routes>
          <Route path='/' Component={New}></Route>
          <Route path='/all' Component={BodyMain}></Route>
        </Routes>
      </Router>
  )
}

export default App;
