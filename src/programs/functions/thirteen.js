import { useState,useEffect } from "react"
import FirstJava from "../../topics/FirstJava"
import FirstJavaFour from "./four"
import Arrays from "../../topics/Arrays"
import Functions from "../../topics/Functions"
const FunctionsThirteen = ({qn,backPage,qn1,qn2}) =>{
    const q4 = "Take in two numbers and an operator (+, -, *, /) and calculate the value. (Use if conditions)"
    const [file,setFile] = useState("Loading Java FIle...")
    const url = window.location.href
    const back = (page) =>{
        backPage(page)
    }
    useEffect(()=>{
    async function fetchFile() {
        try{
    const res = await fetch(`${url}javaPrograms/functions/Thirteen.java`)

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

<div className="program-btns">
<div onClick={() => back(<Functions/>)} className='program-btn'>Go To Map</div>
<div onClick={() => back(<Arrays/>)} className='program-btn'>Next Map</div>
</div>

</div></div>)
}
export default FunctionsThirteen