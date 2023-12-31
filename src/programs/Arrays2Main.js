import PageChanger from "../topics/PageChanger"
const Arrays2Main = ({onProgramChange}) =>{
    const q1 = "Find N Unique Integers Sum up to Zero"
    const q2 = "Lucky Number In a Matrix"
    const q3 = "Maximum Subarray"
    const q4 = "Reshape the Matrix"
    const q5 = "Plus One"
    const q6 = "Remove Duplicates from Sorted Array"
    const q7 = "Minimum Cost to Move Chips to The Same Position"
    const q8 = "Spiral Matrix"
    const q9 = "Spiral Matrix II"
    const q10 = "Spiral Matrix III"
    const q11 = "Set Matrix Zeroes"
    const q12 = "Product of Array Except Self"
    const q13 = "Find First and Last Position of Element in Sorted Array"
    const q14 = "Jump Game"
    const q15 = "Rotate Array"
    const q16 = "Sort Colors"
    const q17 = "House Robber"
    const q18 = "Max Value of Equation"
    const q19 = "First Missing Positive"
    const q20 = "Good Array"
    const ChangePage = (prop) =>{
onProgramChange(prop)
    }
    return(<div className="w-4/5 container  flex flex-col items-center">
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={65}/>)}>
        1.{q1}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={66}/>)}
    >
        2.{q2}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={67}/>)}>
        3.{q3}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={68}/>)}>
        4.{q4}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={69}/>)}>
        5.{q5}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={70}/>)}>
        6.{q6}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={71}/>)}>
        7.{q7}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={72}/>)}>
        8.{q8}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={73}/>)}>
        9.{q9}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={74}/>)}>
        10.{q10}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={75}/>)}>
        11.{q11}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={76}/>)}>
        12.{q12}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={77}/>)}>
        13.{q13}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={78}/>)}>
        14.{q14}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={79}/>)}>
        15.{q15}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={80}/>)}>
        16.{q16}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={81}/>)}>
        17.{q17}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={82}/>)}>
        18.{q18}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={83}/>)}>
        19.{q19}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={84}/>)}>
        20.{q20}
    </div>
  
   
   </div>) 
}
export default Arrays2Main