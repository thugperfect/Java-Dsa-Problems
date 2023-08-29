import downArrow from '../images/expand_more_FILL0_wght400_GRAD0_opsz24.svg'
import FirstjavaMain from '../programs/FirstjavaMain'
import ConditionalsMain from '../programs/ConditionalsMain'
import FunctionsMain from '../programs/FunctionsMain'
import ArraysMain from '../programs/ArraysMain'
import Arrays2Main from '../programs/Arrays2Main'
import { useState } from 'react'
const All = ({onProgramChange}) =>{

    const [click,setClick] = useState(0)
    
        const Changepage =(prop) =>{
            console.log(prop);
            if(click !== prop){
                setClick(prop)
            }else{
                setClick(0)
            }            
        }
        const ProgramChange =(prop) =>{
            onProgramChange(prop)
        }

   return(<div className='container mx-auto flex flex-col items-center'>
<div className="w-4/5 bg-slate-700 transition duration-700 px-5 h-16 cursor-pointer flex justify-between items-center mb-1 rounded-lg"
   onClick={()=>Changepage(1)}
   >
    <div>First Java</div>
    <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
   {(click===1)?<FirstjavaMain onProgramChange={ProgramChange}/>:""}
   <div className="w-4/5 bg-slate-700 px-5 h-16 cursor-pointer flex  justify-between items-center mb-1 rounded-lg"
   onClick={()=>Changepage(2)}>
   <div>Conditionals & Loops</div>
   <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
  
   {(click===2)?<ConditionalsMain onProgramChange={ProgramChange}/>:""}

   <div className="w-4/5 bg-slate-700 px-5 h-16 cursor-pointer flex justify-between items-center mb-1 rounded-lg"
   onClick={()=>Changepage(3)}>
   <div>Functions</div>
   <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
   {(click===3)?<FunctionsMain onProgramChange={ProgramChange}/>:""}
   <div className="w-4/5 bg-slate-700 px-5 h-16 cursor-pointer flex  justify-between items-center mb-1 rounded-lg"
   onClick={()=>Changepage(4)}>
   <div>Arrays</div>
   <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
   {(click===4)?<ArraysMain onProgramChange={ProgramChange}/>:""}
   
   <div className="w-4/5 bg-slate-700 px-5 h-16 cursor-pointer flex  justify-between items-center mb-1 rounded-lg" 
   onClick={()=>Changepage(5)}>
   <div>Arrays 2</div>
   <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
   {(click===5)?<Arrays2Main onProgramChange={ProgramChange}/>:""}
   <div className="w-4/5 bg-slate-700 px-5 h-16 cursor-pointer flex  justify-between items-center mb-1 rounded-lg">
   <div>Searching</div>
   <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
   <div className="w-4/5 bg-slate-700 px-5 h-16 cursor-pointer flex  justify-between items-center mb-1 rounded-lg">
   <div>Sorting</div>
   <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
   <div className="w-4/5 bg-slate-700 px-5 h-16 cursor-pointer flex  justify-between items-center mb-1 rounded-lg">
   <div>Strings</div>
   <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
   <div className="w-4/5 bg-slate-700 px-5 h-16 cursor-pointer flex  justify-between items-center mb-1 rounded-lg">
   <div>Patterns</div>
   <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
   <div className="w-4/5 bg-slate-700 px-5 h-16 cursor-pointer flex  justify-between items-center mb-1 rounded-lg">
   <div>Recursion</div>
   <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
   <div className="w-4/5 bg-slate-700 px-5 h-16 cursor-pointer flex  justify-between items-center mb-1 rounded-lg">
   <div>Bitwise</div>
   <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
   <div className="w-4/5 bg-slate-700 px-5 h-16 cursor-pointer flex  justify-between items-center mb-1 rounded-lg">
   <div>Math</div>
   <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
   <div className="w-4/5 bg-slate-700 px-5 h-16 cursor-pointer flex  justify-between items-center mb-1 rounded-lg">
   <div>Complexities</div>
   <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
   <div className="w-4/5 bg-slate-700 px-5 h-16 cursor-pointer flex  justify-between items-center mb-1 rounded-lg">
   <div>OOP</div>
   <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
   <div className="w-4/5 bg-slate-700 px-5 h-16 cursor-pointer flex  justify-between items-center mb-1 rounded-lg">
   <div>Linked List</div>
   <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
   <div className="w-4/5 bg-slate-700 px-5 h-16 cursor-pointer flex  justify-between items-center mb-1 rounded-lg">
   <div>Stack & Queue</div>
   <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
   <div className="w-4/5 bg-slate-700 px-5 h-16 cursor-pointer flex  justify-between items-center mb-1 rounded-lg">
   <div>Trees</div>
   <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
   </div>
   
   
   
   ) 
}
export default All