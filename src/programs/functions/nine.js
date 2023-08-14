import { useState,useEffect } from "react"
import FirstJava from "../../topics/FirstJava"
import FirstJavaFour from "./four"
import FunctionsTen from "./ten"
import Functions from "../../topics/Functions"
const FunctionsNine = ({qn,backPage,qn1,qn2}) =>{
    const q10 = "10.Write a function to find if a number is a palindrome or not. Take number as parameter."
    const [file,setFile] = useState("Loading Java FIle...")
    const url = window.location.href
    const back = (page) =>{
        backPage(page)
    }
    useEffect(()=>{
    async function fetchFile() {
        try{
    const res = await fetch(`${url}javaPrograms/functions/Nine.java`)

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
<div onClick={() => back(<FunctionsTen qn = {q10} backPage={backPage} />)} className='program-btn'>Next</div>
</div>

</div></div>)
}
export default FunctionsNine