

import '../../styles/programs.css'
import '../../styles/topics.css'
import ConditionalsAndLoops from '../../topics/ConditionalsAndLoops'
import { useState,useEffect } from 'react'

import ConditionalsAndLoopsTwenty from './twenty'


const ConditionalsAndLoopsNineteen= ({qn,backPage}) =>{
    const q20 = "Write a program to print the sum of negative numbers, sum of positive even numbers and the sum of positive odd numbers from a list of numbers (N) entered by the user. The list terminates when the user enters a zero."
    const back = (page) =>{
        backPage(page)
    }
        const url = window.location.href

        const [file,setFile] = useState("Loading...")
    
        useEffect(()=>{
        async function fetchFile() {
            try{
        const res = await fetch(`${url}javaPrograms/conditionalsAndLoops/Nineteen.java`)
   
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
        <div className='topics-logo'>19.{qn}</div>
        <div className='program-content'>

          
            <div className='program-hint program'>
                <pre>  {file}</pre>
         

            </div>
            <div className='program-btns'>
            <div onClick={() => back(<ConditionalsAndLoops/>)} className='program-btn'>Go To Map</div>
            <div onClick={() => back(<ConditionalsAndLoopsTwenty qn ={q20} backPage={backPage}/>)} className='program-btn'>Next</div>
                </div>
           
        </div>
    
    </div>)
}
export default ConditionalsAndLoopsNineteen