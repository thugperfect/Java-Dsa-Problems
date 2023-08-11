import '../../styles/programs.css'
import '../../styles/topics.css'

import { useState,useEffect } from 'react'
const FirstJavaOne = ({qn}) =>{

        const [file,setFile] = useState("")
    
        useEffect(()=>{
        async function fetchFile() {
            try{
        const res = await fetch('https://java-dsa.onrender.com/javaPrograms/firstJava/One.java')
   
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
        </div>
    
    </div>)
}
export default FirstJavaOne