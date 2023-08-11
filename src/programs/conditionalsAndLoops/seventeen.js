

import '../../styles/programs.css'
import '../../styles/topics.css'
import ConditionalsAndLoops from '../../topics/ConditionalsAndLoops'
import { useState,useEffect } from 'react'

import ConditionalsAndLoopsEighteen from './eighteen'


const ConditionalsAndLoopsSeventeen= ({qn,backPage}) =>{
    const q18 = "HCF & LCM Of Two Numbers Program"
    const back = (page) =>{
        backPage(page)
    }
        const url = window.location.href

        const [file,setFile] = useState("")
    
        useEffect(()=>{
        async function fetchFile() {
            try{
        const res = await fetch(`${url}javaPrograms/conditionalsAndLoops/Seventeen.java`)
   
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
                
                </div>
            <div onClick={() => back(<ConditionalsAndLoops/>)} className='program-btn'>Go To Map</div>
            <div onClick={() => back(<ConditionalsAndLoopsEighteen qn ={q18} backPage={backPage}/>)} className='program-btn'>Next</div>
        </div>
    
    </div>)
}
export default ConditionalsAndLoopsSeventeen