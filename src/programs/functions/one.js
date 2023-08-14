import '../../styles/programs.css'
import '../../styles/topics.css'
import FirstJava from '../../topics/FirstJava'
import { useState,useEffect } from 'react'
import FunctionsTwo from './two'
const FunctionsOne = ({qn,backPage,qn1}) =>{
    const q2 = "Take name as input and print a greeting message for that particular name."
    const back = (page) =>{
        backPage(page)
    }
        const url = window.location.href

        const [file,setFile] = useState("Loading Java FIle...")
    
        useEffect(()=>{
        async function fetchFile() {
            try{
        const res = await fetch(`${url}javaPrograms/functions/One.java`)
   
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
            <div className='program-btns'> <div onClick={() => back(<FirstJava/>)} className='program-btn'>Go To Map</div>
            <div onClick={() => back(<FunctionsTwo qn ={qn1} backPage={backPage}/>)} className='program-btn'>Next</div></div>
           
        </div>
    
    </div>)
}
export default FunctionsOne