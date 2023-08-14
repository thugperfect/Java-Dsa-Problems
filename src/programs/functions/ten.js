import { useState,useEffect } from "react"
import FirstJava from "../../topics/FirstJava"
import FirstJavaFour from "./four"
import Functions from "../../topics/Functions"
import FunctionsEleven from "./eleven"
const FunctionsTen = ({qn,backPage,qn1,qn2}) =>{
    const q11 = "11.Write a function to check if a given triplet is a Pythagorean triplet or not."
    const [file,setFile] = useState("Loading Java FIle...")
    const url = window.location.href
    const back = (page) =>{
        backPage(page)
    }
    useEffect(()=>{
    async function fetchFile() {
        try{
    const res = await fetch(`${url}javaPrograms/firstJava/Three.java`)

    const cont = await res.text();
    
    setFile(cont)
    }
    catch(err){
    console.log(err);
    }

}
 
fetchFile() 
},[])
    return(<div className="program-body"><div className='topics-logo'>3.{qn}</div>
        <div className='program-content'>


<div className='program-hint program'><pre>{file}</pre></div>

<div className="program-btns">
<div onClick={() => back(<Functions/>)} className='program-btn'>Go To Map</div>
<div onClick={() => back(<FunctionsEleven qn ={q11} backPage={backPage} />)} className='program-btn'>Next</div>
</div>

</div></div>)
}
export default FunctionsTen