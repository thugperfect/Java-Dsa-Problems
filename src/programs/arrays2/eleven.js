

import '../../styles/programs.css'
import '../../styles/topics.css'
import ConditionalsAndLoops from '../../topics/ConditionalsAndLoops'
import { useState,useEffect } from 'react'
import ConditionalsAndLoopsTwelve from './twelve'
import Arrays from '../../topics/Arrays'
import ArraysTwelve from './twelve'
import Arrays2 from '../../topics/Arrays2'
import Arrays2Twelve from './twelve'


const Arrays2Eleven = ({qn,backPage}) =>{
    const q12 = "12.Product of Array Except Self"
    const back = (page) =>{
        backPage(page)
    }
        const url = window.location.href

        const [file,setFile] = useState("Loading Java FIle...")
    
        useEffect(()=>{
        async function fetchFile() {
            try{
        const res = await fetch(`${url}javaPrograms/arrays2/Eleven.java`)
   
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
            <div onClick={() => back(<Arrays2Twelve qn ={q12} backPage={backPage}/>)} className='program-btn'>Next</div>
                </div>
            
        </div>
    
    </div>)
}
export default Arrays2Eleven