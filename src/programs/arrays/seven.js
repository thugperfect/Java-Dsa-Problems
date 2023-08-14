

import '../../styles/programs.css'
import '../../styles/topics.css'
import ConditionalsAndLoops from '../../topics/ConditionalsAndLoops'
import { useState,useEffect } from 'react'
import ConditionalsAndLoopsEight from './eight'
import ArraysEight from './eight'
import Arrays from '../../topics/Arrays'
const ArraysSeven = ({qn,backPage}) =>{
    const q8 = "Calculate Average Of N Numbers"
    const back = (page) =>{
        backPage(page)
    }
        const url = window.location.href

        const [file,setFile] = useState("Loading Java FIle...")
    
        useEffect(()=>{
        async function fetchFile() {
            try{
        const res = await fetch(`${url}javaPrograms/conditionalsAndLoops/Seven.java`)
   
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
        <div className='topics-logo'>7.{qn}</div>
        <div className='program-content'>

          
            <div className='program-hint program'>
                <pre>  {file}</pre>
         

            </div>
            <div className='program-btns'>
            <div onClick={() => back(<Arrays/>)} className='program-btn'>Go To Map</div>
            <div onClick={() => back(<ArraysEight qn ={q8} backPage={backPage}/>)} className='program-btn'>Next</div>
                </div>
            
        </div>
    
    </div>)
}
export default ArraysSeven