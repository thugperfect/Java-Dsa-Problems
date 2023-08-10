import FirstJava from "../topics/FirstJava"
import Functions from "../topics/Functions"
import ConditionalsAndLoops from "../topics/ConditionalsAndLoops"
import Arrays from "../topics/Arrays"
import Searching from "../topics/Searching"

const Body = ({topic}) =>{

   
    return(<div className="body">
    <div className='map'>
  {topic}
    </div>
  </div>)
}
export default Body