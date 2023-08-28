
import React from "react"

const Body = ({topic,onProgramChange}) =>{

  const passedTopic = React.cloneElement(topic,{onProgramChange})
    return(<div className="flex flex-col items-center ">
  
  {passedTopic}
    </div>
)
}
export default Body