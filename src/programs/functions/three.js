import { useState,useEffect } from "react"
import FunctionsFour from "./four"
import Functions from "../../topics/Functions"
const FunctionsThree = ({qn,backPage,qn1,qn2}) =>{
    const q4 = "4.Write a program to print the sum of two numbers entered by user by defining your own method."
    const [file,setFile] = useState("Loading Java FIle...")
    const url = window.location.href
    const back = (page) =>{
        backPage(page)
    }
    useEffect(()=>{
    async function fetchFile() {
        try{
    const res = await fetch(`${url}javaPrograms/functions/Three.java`)

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
<div onClick={() => back(<FunctionsFour qn = {q4} backPage={backPage} />)} className='program-btn'>Next</div>
</div>

</div></div>)
}
export default FunctionsThree