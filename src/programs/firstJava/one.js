import '../../styles/programs.css'
import '../../styles/topics.css'
import FirstJava from '../../topics/FirstJava'
import { useState,useEffect } from 'react'
const FirstJavaOne = ({qn,backPage,file}) =>{

    const back = (page) =>{
        backPage(page)
    }

    return(<div className="program-body">
        <div className='topics-logo'>{qn}</div>
        <div className='program-content'>

          
            <div className='program-hint program'>
                <pre>  {file}</pre>
         

            </div>

            <div onClick={() => back(<FirstJava/>)} className='program-btn'>Go To Map</div>
            <div className='program-btn'>Next</div>
        </div>
    
    </div>)
}
export default FirstJavaOne