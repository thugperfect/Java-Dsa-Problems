

import '../../styles/programs.css'
import '../../styles/topics.css'
import ConditionalsAndLoops from '../../topics/ConditionalsAndLoops'
import { useState,useEffect } from 'react'


import ConditionalsAndLoopsTwentyone from './twentyone'


const ConditionalsAndLoopsTwenty= ({qn,backPage}) =>{
    const q21 = "Kunal is allowed to go out with his friends only on the even days of a given month. Write a program to count the number of days he can go out in the month of August."
    const back = (page) =>{
        backPage(page)
    }
        const url = window.location.href

        const [file,setFile] = useState("")
    
        useEffect(()=>{
        async function fetchFile() {
            try{
        const res = await fetch(`${url}javaPrograms/conditionalsAndLoops/Twenty.java`)
   
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

            <div onClick={() => back(<ConditionalsAndLoops/>)} className='program-btn'>Go To Map</div>
            <div onClick={() => back(<ConditionalsAndLoopsTwentyone qn ={q21} backPage={backPage}/>)} className='program-btn'>Next</div>
        </div>
    
    </div>)
} 
export default ConditionalsAndLoopsTwenty