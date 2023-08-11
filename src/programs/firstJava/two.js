import FirstJava from "../../topics/FirstJava"
import { useState,useEffect } from "react"
const FirstJavaTwo = ({qn,backPage}) =>{
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
    <div onClick={() => back(<FirstJava/>)} className='program-btn'>Go To Map</div>
            <div className='program-btn'>Next</div>
    </div></div>)
}
export default FirstJavaTwo