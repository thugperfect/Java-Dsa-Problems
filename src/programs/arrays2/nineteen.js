

import '../../styles/programs.css'
import '../../styles/topics.css'
import ConditionalsAndLoops from '../../topics/ConditionalsAndLoops'
import { useState,useEffect } from 'react'

import ConditionalsAndLoopsTwenty from './twenty'
import Arrays from '../../topics/Arrays'
import ArraysTwenty from './twenty'


const ArraysNineteen= ({qn,backPage}) =>{
    const q20 = "20.Determine Whether Matrix Can Be Obtained By Rotation."
    const back = (page) =>{
        backPage(page)
    }
        const url = window.location.href

        const [file,setFile] = useState("Loading Java FIle...")
    
        useEffect(()=>{
        async function fetchFile() {
            try{
        const res = await fetch(`${url}javaPrograms/arrays/Nineteen.java`)
   
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
            <div onClick={() => back(<Arrays/>)} className='program-btn'>Go To Map</div>
            <div onClick={() => back(<ArraysTwenty qn ={q20} backPage={backPage}/>)} className='program-btn'>Next</div>
                </div>
           
        </div>
    
    </div>)
}
export default ArraysNineteen