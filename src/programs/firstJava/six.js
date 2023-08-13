import FirstJava from "../../topics/FirstJava"
import { useState,useEffect } from "react"
import FirstJavaSeven from "./seven"
const FirstJavaSix = ({qn,backPage}) =>{
    const q7 = "To calculate Fibonacci Series up to n numbers."
    const back = (page) =>{
        backPage(page)
    }
    const [file,setFile] = useState("Loading...")
    const url = window.location.href
    useEffect(()=>{
    async function fetchFile() {
        try{
    const res = await fetch(`${url}javaPrograms/firstJava/Six.java`)

    const cont = await res.text();
    
    setFile(cont)
    }
    catch(err){
    console.log(err);
    }

}
 
fetchFile() 
},[])
    return(<div className="program-body"><div className='topics-logo'>6.{qn}</div>
        <div className='program-content'>


<div className='program-hint program'><pre>{file}</pre></div>

<div className="program-btns">
<div onClick={() => back(<FirstJava/>)} className='program-btn'>Go To Map</div>
<div onClick={() => back(<FirstJavaSeven qn = {q7} backPage={backPage}/>)} className='program-btn'>Next</div>
 
</div>

</div></div>)
}
export default FirstJavaSix