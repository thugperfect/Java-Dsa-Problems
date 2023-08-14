

import '../../styles/programs.css'
import '../../styles/topics.css'
import ConditionalsAndLoops from '../../topics/ConditionalsAndLoops'
import { useState,useEffect } from 'react'


import ConditionalsAndLoopsNineteen from './nineteen'
import Arrays from '../../topics/Arrays'
import ArraysNineteen from './nineteen'


const ArraysEighteen= ({qn,backPage}) =>{
    const q19 = "19.Maximum Population Year."
    const back = (page) =>{
        backPage(page)
    }
        const url = window.location.href

        const [file,setFile] = useState("Loading Java FIle...")
    
        useEffect(()=>{
        async function fetchFile() {
            try{
        const res = await fetch(`${url}javaPrograms/conditionalsAndLoops/Eighteen.java`)
   
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
            <div onClick={() => back(<ArraysNineteen qn ={q19} backPage={backPage}/>)} className='program-btn'>Next</div>
            </div>
            
        </div>
    
    </div>)
}
export default ArraysEighteen