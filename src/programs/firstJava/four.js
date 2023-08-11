import FirstJava from "../../topics/FirstJava"
import { useState,useEffect } from "react"
import FirstJavaFive from "./five"
const FirstJavaFour = ({qn,backPage}) =>{
    const q5 = "Take 3 numbers as input and print the largest number."
    const back = (page) =>{
        backPage(page)
    }
    const [file,setFile] = useState("")
    const url = window.location.href
    useEffect(()=>{
    async function fetchFile() {
        try{
    const res = await fetch(`${url}javaPrograms/firstJava/Four.java`)

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
<div onClick={() => back(<FirstJava/>)} className='program-btn'>Go To Map</div>
<div onClick={() => back(<FirstJavaFive qn = {q5} backPage={backPage}/>)} className='program-btn'>Next</div>
</div>

</div></div>)
}
export default FirstJavaFour