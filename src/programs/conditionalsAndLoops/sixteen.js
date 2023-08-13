

import '../../styles/programs.css'
import '../../styles/topics.css'
import ConditionalsAndLoops from '../../topics/ConditionalsAndLoops'
import { useState,useEffect } from 'react'
import ConditionalsAndLoopsSeventeen from './seventeen'


const ConditionalsAndLoopsSixteen = ({qn,backPage}) =>{
    const q17 = "Find if a number is palindrome or not"
    const back = (page) =>{
        backPage(page)
    }
        const url = window.location.href

        const [file,setFile] = useState("Loading...")
    
        useEffect(()=>{
        async function fetchFile() {
            try{
        const res = await fetch(`${url}javaPrograms/conditionalsAndLoops/Sixteen.java`)
   
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
        <div className='topics-logo'>16.{qn}</div>
        <div className='program-content'>

          
            <div className='program-hint program'>
                <pre>  {file}</pre>
         

            </div>
            <div className='program-btns'>
            <div onClick={() => back(<ConditionalsAndLoops/>)} className='program-btn'>Go To Map</div>
            <div onClick={() => back(<ConditionalsAndLoopsSeventeen qn ={q17} backPage={backPage}/>)} className='program-btn'>Next</div> 
                </div>
            
        </div>
    
    </div>)
}
export default ConditionalsAndLoopsSixteen