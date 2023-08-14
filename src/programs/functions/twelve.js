import '../../styles/programs.css'
import '../../styles/topics.css'
import FirstJava from '../../topics/FirstJava'
import { useState,useEffect } from 'react'
import FirstJavaTwo from './two'
import FunctionsThirteen from './thirteen'
import Functions from '../../topics/Functions'
const FunctionsTwelve = ({qn,backPage,qn1,qn2}) =>{
    const q13 = "13.Write a function that returns the sum of first n natural numbers."
    const back = (page) =>{
        backPage(page)
    }
        const url = window.location.href

        const [file,setFile] = useState("Loading Java FIle...")
    
        useEffect(()=>{
        async function fetchFile() {
            try{
        const res = await fetch(`${url}javaPrograms/functions/Twelve.java`)
   
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
                <pre>{file}</pre>
         

            </div>
            <div className='program-btns'> <div onClick={() => back(<Functions/>)} className='program-btn'>Go To Map</div>
            <div onClick={() => back(<FunctionsThirteen qn = {q13} backPage={backPage}/>)} className='program-btn'>Next</div></div>
           
        </div>
    
    </div>)
}
export default FunctionsTwelve