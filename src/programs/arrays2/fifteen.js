

import '../../styles/programs.css'
import '../../styles/topics.css'
import ConditionalsAndLoops from '../../topics/ConditionalsAndLoops'
import { useState,useEffect } from 'react'
import ConditionalsAndLoopsSixteen from './sixteen'
import Arrays from '../../topics/Arrays'
import ArraysSixteen from './sixteen'
import Arrays2 from '../../topics/Arrays2'
import Arrays2Sixteen from './sixteen'

const Arrays2Fifteen = ({qn,backPage}) =>{
    const q16 = "16.find numbers with even number of digits."
    const back = (page) =>{
        backPage(page)
    }
        const url = window.location.href

        const [file,setFile] = useState("Loading Java FIle...")
    
        useEffect(()=>{
        async function fetchFile() {
            try{
        const res = await fetch(`${url}javaPrograms/arrays/Fifteen.java`)
   
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
            <div onClick={() => back(<Arrays2Sixteen qn ={q16} backPage={backPage}/>)} className='program-btn'>Next</div>
                </div>
            
        </div>
    
    </div>)
}
export default Arrays2Fifteen