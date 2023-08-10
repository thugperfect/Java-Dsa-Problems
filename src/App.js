import Body from './components/Body';
import './styles/App.css';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import FirstJava from './topics/FirstJava';
import FirstJavaOne from './programs/firstJava/one';
import FirstJavaTwo from './programs/firstJava/two';
import FirstJavaThree from './programs/firstJava/three';
import FirstJavaFour from './programs/firstJava/four';
import FirstJavaFive from './programs/firstJava/five';
import FirstJavaSix from './programs/firstJava/six';
import FirstJavaSeven from './programs/firstJava/seven';
import FirstJavaEight from './programs/firstJava/eight';
import FirstJavaNine from './programs/firstJava/nine';


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
    <div className="Main">
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

export default App;
