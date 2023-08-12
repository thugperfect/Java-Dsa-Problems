import FirstJava from "../../topics/FirstJava"
import { useState,useEffect } from "react"
import FirstJavaEight from "./eight"
const FirstJavaSeven = ({qn,backPage}) =>{
    const q8 = "To find out whether the given String is Palindrome or not."
    const back = (page) =>{
        backPage(page)
    }
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
    return(<div className="program-body"><div className='topics-logo'>7.{qn}</div>
        <div className='program-content'>


<div className='program-hint program'><pre>{file}</pre></div>

<div className="program-btns">
<div onClick={() => back(<FirstJava/>)} className='program-btn'>Go To Map</div>
<div onClick={() => back(<FirstJavaEight qn = {q8} backPage={backPage}/>)} className='program-btn'>Next</div>
</div>


</div></div>)
}
export default FirstJavaSeven