import { useState,useEffect } from "react"
import FirstJava from "../../topics/FirstJava"
import FirstJavaFour from "./four"
import Functions from "../../topics/Functions"
import FunctionsNine from "./nine"
const FunctionsEight = ({qn,backPage,qn1,qn2}) =>{
    const q9  = "9.Write a program to print the factorial of a number by defining a method named 'Factorial'."
    const [file,setFile] = useState("Loading Java FIle...")
    const url = window.location.href
    const back = (page) =>{
        backPage(page)
    }
    useEffect(()=>{
    async function fetchFile() {
        try{
    const res = await fetch(`${url}javaPrograms/functions/Eight.java`)

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
<div onClick={() => back(<FunctionsNine qn = {q9} backPage={backPage} />)} className='program-btn'>Next</div>
</div>

</div></div>)
}
export default FunctionsEight