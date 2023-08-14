
import React from "react"

const Body = ({topic,onProgramChange}) =>{

  const passedTopic = React.cloneElement(topic,{onProgramChange})
    return(<div className="body">
  
  {passedTopic}
    </div>
)
}
export default Body