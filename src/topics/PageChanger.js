import { moduleFetch } from "../moduleFetch"
import { useState,useEffect } from "react"

const PageChanger = ({mod}) =>{

const numberMod = Number(mod)
const url = window.location.href
const fileFetch = moduleFetch.find((prop)=>
         prop.id ===numberMod

    )
    const fileName = fileFetch.file_name
    const [file,setFile]= useState("Loading...")
    useEffect(()=>{
        const fetchFile = async ()=>{
            try{
                const res = await fetch(`${url}javaPrograms/${fileName}`)
                const content = await res.text()
                setFile(content)
            }catch{

            }
        }
        fetchFile()
    },[])
    return(
        <div className="container text-white flex flex-col items-center gap-8 min-h-[700px]">
            <div className="mt-5">{fileFetch.qn_no}.{fileFetch.qn}</div>
            <pre className="container bg-black w-4/5 h-auto rounded-lg px-4 p-4">
         {file}
       </pre>
            </div>
    )
}
export default PageChanger