import { moduleFetch } from "../moduleFetch"
import { useState,useEffect } from "react"

const PageChanger = ({mod}) =>{

    const [page,ChangePage] = useState(0)
    const pageview = Number(mod)+page
const numberMod = pageview
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
    },[page,pageview])

    const forward = (prop)=>{
        ChangePage(prop)
    }
    const backward = (prop)=>{
        if(page>0)
        ChangePage(prop)
    }
    return(
        <div className="container text-white flex flex-col items-center gap-8 min-h-[700px] ">
            <div className="mt-5 px-4">{fileFetch.qn_no}.{fileFetch.qn}</div>
            <pre className="container bg-black  lg:w-4/5 md:text-lg  md:text-[10px] sm:w-full h-auto  rounded-lg px-4 p-4">
               {file}</pre>

               <div className="flex">
                <div onClick={()=>{backward(page-1)}} className="p-3 bg-slate-700 rounded-lg mr-2 mb-5 cursor-pointer">Prev</div>
                <div onClick={()=>{forward(page+1)}} className="p-3 bg-slate-700 rounded-lg mr-2 mb-5 cursor-pointer">Next</div></div>
            </div>
    )
}
export default PageChanger