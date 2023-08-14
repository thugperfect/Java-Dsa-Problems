import '../../styles/programs.css'
import '../../styles/topics.css'
import FirstJava from '../../topics/FirstJava'
import { useState,useEffect } from 'react'
import FunctionsThree from './three'
import Functions from '../../topics/Functions'
const FunctionsTwo = ({qn,backPage,qn1,qn2}) =>{
    const q3 = "3.A person is eligible to vote if his/her age is greater than or equal to 18. Define a method to find out if he/she is eligible to vote."
    const back = (page) =>{
        backPage(page)
    }
        const url = window.location.href

        const [file,setFile] = useState("Loading Java FIle...")
    
        useEffect(()=>{
        async function fetchFile() {
            try{
        const res = await fetch(`${url}javaPrograms/functions/Two.java`)
   
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
            <div onClick={() => back(<FunctionsThree qn ={q3} backPage={backPage}/>)} className='program-btn'>Next</div></div>
           
        </div>
    
    </div>)
}
export default FunctionsTwo