

import '../../styles/programs.css'
import '../../styles/topics.css'
import ConditionalsAndLoops from '../../topics/ConditionalsAndLoops'
import { useState,useEffect } from 'react'
import ConditionalsAndLoopsFour from './four'
import Arrays2 from '../../topics/Arrays2'
import ArraysFour from './four'
import Arrays2Four from './four'
const Arrays2Three = ({qn,backPage}) =>{
    const q4 = "4.Reshape the Matrix"
    const back = (page) =>{
        backPage(page)
    }
        const url = window.location.href

        const [file,setFile] = useState("Loading Java FIle...")
    
        useEffect(()=>{
        async function fetchFile() {
            try{
        const res = await fetch(`${url}javaPrograms/arrays2/Three.java`)
   
        const cont = await res.text();
        
        setFile(cont)
        }
        catch(err){
        console.log(err);
        }

    }
     
    fetchFile() 
  },[])
    return(<div className="program-body">
        <div className='topics-logo'>{qn}</div>
        <div className='program-content'>

          
            <div className='program-hint program'>
                <pre>  {file}</pre>
            </div>
            <div className='program-btns'>
            <div onClick={() => back(<Arrays2/>)} className='program-btn'>Go To Map</div>
            <div onClick={() => back(<Arrays2Four qn ={q4} backPage={backPage}/>)} className='program-btn'>Next</div>
                </div>
           
        </div>
    
    </div>)
}
export default Arrays2Three