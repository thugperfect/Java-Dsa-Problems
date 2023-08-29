import { moduleFetch } from "../moduleFetch"
const PageChanger = ({mod}) =>{
    const numberMod = Number(mod)

     const file = moduleFetch.find((prop)=>
         prop.id ===numberMod

    )
    console.log(file);
   
    return(
        <div className="container text-white flex flex-col items-center gap-8 min-h-[700px]">
            <div className="mt-5">{file.qn_no}.{file.qn}</div>
            <div className="container bg-black w-4/5 h-auto rounded-lg px-4 p-4">
         
       </div>
            </div>
    )
}
export default PageChanger