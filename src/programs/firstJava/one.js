import '../../styles/programs.css'
import '../../styles/topics.css'
const FirstJavaOne = ({qn}) =>{
    return(<div className="program-body">
        <div className='topics-logo'>{qn}</div>
        <div className='program-content'>

            <div className='program-hint'></div>
            <div className='program-hint program'></div>
        </div>
    
    </div>)
}
export default FirstJavaOne