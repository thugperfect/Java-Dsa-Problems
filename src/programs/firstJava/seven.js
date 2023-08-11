
import { useState,useEffect } from "react"
const FirstJavaSeven = ({qn}) =>{
    const [file,setFile] = useState("")
    const url = window.location.href
    useEffect(()=>{
    async function fetchFile() {
        try{
    const res = await fetch(`${url}javaPrograms/firstJava/Seven.java`)

    const cont = await res.text();
    
    setFile(cont)
    }
    catch(err){
    console.log(err);
    }

}
 
fetchFile() 
},[])
    return(<div className="program-body"><div className='topics-logo'>{qn}</div>
        <div className='program-content'>


<div className='program-hint program'><pre>{file}</pre></div>

</div></div>)
}
export default FirstJavaSeven