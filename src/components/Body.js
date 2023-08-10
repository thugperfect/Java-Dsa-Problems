import FirstJava from "../topics/FirstJava"
import Functions from "../topics/Functions"
import ConditionalsAndLoops from "../topics/ConditionalsAndLoops"
import Arrays from "../topics/Arrays"
import Searching from "../topics/Searching"
import React from "react"

const Body = ({topic,onProgramChange}) =>{

  const passedTopic = React.cloneElement(topic,{onProgramChange})
    return(<div className="body">
  
  {passedTopic}
    </div>
)
}
export default Body