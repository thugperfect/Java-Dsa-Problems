

import '../../styles/programs.css'
import '../../styles/topics.css'
import ConditionalsAndLoops from '../../topics/ConditionalsAndLoops'
import { useState,useEffect } from 'react'

import ConditionalsAndLoopsEleven from './eleven'
import Arrays from '../../topics/Arrays'
import ArraysEleven from './eleven'
const ArraysTen = ({qn,backPage}) =>{
    const q11 = "Calculate Commission Percentage"
    const back = (page) =>{
        backPage(page)
    }
        const url = window.location.href

        const [file,setFile] = useState("Loading Java FIle...")
    
        useEffect(()=>{
        async function fetchFile() {
            try{
        const res = await fetch(`${url}javaPrograms/conditionalsAndLoops/Ten.java`)
   
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
        <div className='topics-logo'>10.{qn}</div>
        <div className='program-content'>

          
            <div className='program-hint program'>
                <pre>  {file}</pre>
         

            </div>
            <div className='program-btns'>
            <div onClick={() => back(<Arrays/>)} className='program-btn'>Go To Map</div>
            <div onClick={() => back(<ArraysEleven qn ={q11} backPage={backPage}/>)} className='program-btn'>Next</div>  
                </div>
            
        </div>
    
    </div>)
}
export default ArraysTen