import { useState,useEffect } from "react"
import FirstJava from "../../topics/FirstJava"
import FirstJavaFour from "./four"
import Functions from "../../topics/Functions"
import FunctionsEight from "./eight"
const FunctionsSeven = ({qn,backPage,qn1,qn2}) =>{
    const q8 = "8.Write a program that will ask the user to enter his/her marks (out of 100). Define a method that will display grades according to the marks entered"
    const [file,setFile] = useState("Loading Java FIle...")
    const url = window.location.href
    const back = (page) =>{
        backPage(page)
    }
    useEffect(()=>{
    async function fetchFile() {
        try{
    const res = await fetch(`${url}javaPrograms/functions/Seven.java`)

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
<div onClick={() => back(<FunctionsEight qn = {q8} backPage={backPage} />)} className='program-btn'>Next</div>
</div>

</div></div>)
}
export default FunctionsSeven