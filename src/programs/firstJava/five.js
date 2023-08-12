import FirstJava from "../../topics/FirstJava"
import { useState,useEffect } from "react"
import FirstJavaSix from "./six"
const FirstJavaFive = ({qn,backPage}) =>{
    const q6 = "Input currency in rupees and output in USD."
    const back = (page) =>{
        backPage(page)
    }
    const [file,setFile] = useState("")
    const url = window.location.href
    useEffect(()=>{
    async function fetchFile() {
        try{
    const res = await fetch(`${url}javaPrograms/firstJava/Five.java`)

    const cont = await res.text();
    
    setFile(cont)
    }
    catch(err){
    console.log(err);
    }

}
 
fetchFile() 
},[])
    return(<div className="program-body"><div className='topics-logo'>5.{qn}</div>
        <div className='program-content'>


<div className='program-hint program'><pre>{file}</pre></div>

<div className="program-btns">
<div onClick={() => back(<FirstJava/>)} className='program-btn'>Go To Map</div>
<div onClick={() => back(<FirstJavaSix qn = {q6} backPage={backPage} />)} className='program-btn'>Next</div>  
</div>

</div></div>)
}
export default FirstJavaFive