import FirstJava from "../../topics/FirstJava"
import FirstJavaNine from "./nine"
import { useState,useEffect } from "react"
const FirstJavaEight = ({qn,backPage}) =>{
    const q9 = "To find Armstrong Number between two given number."
    const back = (page) =>{
        backPage(page)
    }
    const [file,setFile] = useState("")
    const url = window.location.href
    useEffect(()=>{
    async function fetchFile() {
        try{
    const res = await fetch(`${url}javaPrograms/firstJava/Eight.java`)

    const cont = await res.text();
    
    setFile(cont)
    }
    catch(err){
    console.log(err);
    }

}
 
fetchFile() 
},[])

    return(<div className="program-body"><div className='topics-logo'>8.{qn}</div>    
    <div className='program-content'>

    <div className='program-hint program'><pre>{file}</pre></div>
    <div className="program-btns">
    <div onClick={() => back(<FirstJava/>)} className='program-btn'>Go To Map</div>
    <div onClick={()=>back(<FirstJavaNine qn = {q9} backPage={backPage}/>)} className='program-btn'>Next</div>
</div>
   
    </div></div>)
}
export default FirstJavaEight