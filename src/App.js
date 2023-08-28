import Body from './components/Body';
import './styles/App.css';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import FirstJava from './topics/FirstJava';
import BodyMain from './components/BodyMain';
import All from './topics/All';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';

import New from './New';

import { useState } from "react"
function App() {

  const [topic,changeTopic] = useState(<All/>)

  const handleTopicChange = (newTopic) =>{
    changeTopic(newTopic)
  }

  const handleProgramChange = (newProgram) =>{
    changeTopic(newProgram)
  }
  return (
 <BodyMain onProgramChange={handleProgramChange} topic={topic} />
  )
}

export default App;
