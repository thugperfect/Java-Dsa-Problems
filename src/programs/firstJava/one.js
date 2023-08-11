import '../../styles/programs.css'
import '../../styles/topics.css'
import FirstJava from '../../topics/FirstJava'
import { useState,useEffect } from 'react'
const FirstJavaOne = ({qn,backPage}) =>{

    const back = (page) =>{
        backPage(page)
    }
const url = window.location.href
console.log(url);
        const [file,setFile] = useState("")
    
        useEffect(()=>{
        async function fetchFile() {
            try{
        const res = await fetch(`${url}javaPrograms/firstJava/One.java`)
   
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

            <div onClick={() => back(<FirstJava/>)} className='program-btn'>Go To Map</div>
            <div className='program-btn'>Next</div>
        </div>
    
    </div>)
}
export default FirstJavaOne