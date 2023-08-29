import PageChanger from "../topics/PageChanger"
const ArraysMain = ({onProgramChange}) =>{
    const q1 = "Build Array from Permutation."
    const q2 = "Concatenation of Array."
    const q3 = "Running Sum of 1d Array."
    const q4 = "Richest Customer Wealth."
    const q5 = "Shuffle the Array."
    const q6 = "Kids With the Greatest Number of Candies."
    const q7 = "Number of Good Pairs."
    const q8 = "How Many Numbers Are Smaller Than the Current Number."
    const q9 = "Create Target Array in the Given Order."
    const q10 = "Check if the Sentence Is Pangram."
    const q11 = "Count Items Matching a Rule."
    const q12 = "Find the Highest Altitude. "
    const q13 = "flipping an image."
    const q14 = "cells with odd values in a matrix."
    const q15 = "matrix diagonal sum."
    const q16 = "find numbers with even number of digits."
    const q17 = "Transpose matrix."
    const q18 = "Add to Array-Form of Integer."
    const q19 = "Maximum Population Year."
    const q20 = "Determine Whether Matrix Can Be Obtained By Rotation."
    const q21 = "tow sum."
const ChangePage =(prop)=>{
    onProgramChange(prop)
}
    return(<div className="w-4/5 container  flex flex-col items-center">
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={4.1}/>)}>
        1.{q1}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={4.2}/>)}>
        2.{q2}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={4.3}/>)}>
        3.{q3}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={4.4}/>)}>
        4.{q4}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={4.5}/>)}>
        5.{q5}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={4.6}/>)}>
        6.{q6}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={4.7}/>)}>
        7.{q7}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={4.8}/>)}>
        8.{q8}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={4.9}/>)}>
        9.{q9}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={4.10}/>)}>
        10.{q10}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={4.11}/>)}>
        11.{q11}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={4.12}/>)}>
        12.{q12}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={4.13}/>)}>
        13.{q13}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={4.14}/>)}>
        14.{q14}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={4.15}/>)}>
        15.{q15}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={4.16}/>)}>
        16.{q16}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={4.17}/>)}>
        17.{q17}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={4.18}/>)}>
        18.{q18}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg">
    onClick={()=>ChangePage(<PageChanger mod={4.19}/>)}
        19.{q19}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={4.20}/>)}>
        20.{q20}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={4.21}/>)}>
        21.{q21}
    </div>
  
   
   </div>) 
}
export default ArraysMain