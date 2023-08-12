import FirstJava from "../../topics/FirstJava"
import { useState,useEffect } from "react"
import ConditionalsAndLoops from '../../topics/ConditionalsAndLoops'
const FirstJavaNine = ({qn,backPage}) =>{
    const back = (page) =>{
        backPage(page)
    }
    const [file,setFile] = useState("")
    const url = window.location.href
    useEffect(()=>{
    async function fetchFile() {
        try{
    const res = await fetch(`${url}javaPrograms/firstJava/Nine.java`)

    const cont = await res.text();
    
    setFile(cont)
    }
    catch(err){
    console.log(err);
    }

}
 
fetchFile() 
},[])
    return(<div className="program-body"><div className='topics-logo'>9.{qn}</div>
        <div className='program-content'>


<div className='program-hint program'><pre>{file}</pre></div>
<div className="program-btns">
<div onClick={() => back(<FirstJava/>)} className='program-btn'>Go To Map</div>
<div onClick={() => back(<ConditionalsAndLoops/>)} className='program-btn'>Next Map</div> 
</div>


</div></div>)
}
export default FirstJavaNine