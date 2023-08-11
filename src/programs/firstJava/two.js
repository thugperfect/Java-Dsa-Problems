import FirstJava from "../../topics/FirstJava"
import { useState,useEffect } from "react"
import FirstJavaThree from "./three"
const FirstJavaTwo = ({qn,backPage}) =>{
    const q3 = "Write a program to input principal, time, and rate (P, T, R) from the user and find Simple Interest."
    const url = window.location.href

    const [file,setFile] = useState("")
    const back = (page) =>{
        backPage(page)
    }
    useEffect(()=>{
    async function fetchFile() {
        try{
    const res = await fetch(`${url}javaPrograms/firstJava/Two.java`)

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


    <div className='program-hint program'><pre>{file}</pre></div>

    <div className="program-btns">
    <div onClick={() => back(<FirstJava/>)} className='program-btn'>Go To Map</div>
    <div onClick={() => back(<FirstJavaThree qn={q3} backPage ={backPage}/>)} className='program-btn'>Next</div>
    </div>
  
    </div></div>)
}
export default FirstJavaTwo