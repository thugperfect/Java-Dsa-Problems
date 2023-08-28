import Body from './components/Body';
import './styles/App.css';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import FirstJava from './topics/FirstJava';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';

import All from './topics/All';

import { useState } from "react"
function New() {

  const [topic,changeTopic] = useState(<FirstJava/>)

  const handleTopicChange = (newTopic) =>{
    changeTopic(newTopic)
  }

  const handleProgramChange = (newProgram) =>{
    changeTopic(newProgram)
  }
return( <div className="Main">
      
<div className='App-main'>
<Topbar/>

<div className='App'>
<Navbar onTopicChange={handleTopicChange}/>
<Body onProgramChange={handleProgramChange} topic = {topic}/>

</div>

</div>
       
    </div>
  );
}
export default New