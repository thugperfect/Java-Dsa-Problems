import './styles/App.css';
import BodyMain from './components/BodyMain';
import All from './topics/All';

import { useState } from "react"
function App() {

  const [topic,changeTopic] = useState(<All/>)


  const handleProgramChange = (newProgram) =>{
    changeTopic(newProgram)
  }
  return (
 <BodyMain onProgramChange={handleProgramChange} topic={topic} />
  )
}

export default App;
