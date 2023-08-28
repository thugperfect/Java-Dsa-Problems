import All from "../topics/All"
import React, { useState } from "react"
const BodyMain = ({topic,onProgramChange}) =>{

 const passedTopic = React.cloneElement(topic,{onProgramChange})
    return(<div className="container lg:w-4/5 text-white  px-5 mx-auto  bold italic ">
    <div className="topbar bg-red-600 w-full h-16 flex justify-center items-center text-2xl">
        Java-DSA
    </div>
    <div className="container mx-auto w-full bg-zinc-800 lg:text-lg md:text-md flex flex-col items-center">
     {passedTopic} 
    </div></div>)
}
export default BodyMain