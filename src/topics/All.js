import downArrow from '../images/expand_more_FILL0_wght400_GRAD0_opsz24.svg'
import FirstjavaMain from '../programs/FirstjavaMain'
import ConditionalsMain from '../programs/ConditionalsMain'
import FunctionsMain from '../programs/FunctionsMain'
import ArraysMain from '../programs/ArraysMain'
import Arrays2Main from '../programs/Arrays2Main'
import { useState } from 'react'
const All = () =>{

    const [Firstjava ,changeFirstjava] = useState()

    const Changepage =() =>{
        changeFirstjava(<FirstjavaMain/>)
    }
   return(<div className="container lg:w-4/5 text-white  px-5 mx-auto  bold italic ">
    <div className="topbar bg-red-600 w-full h-16 flex justify-center items-center text-2xl">
        Java-DSA
    </div>
    <div className="container mx-auto w-full bg-zinc-800 lg:text-lg md:text-md flex flex-col items-center">
   <div className="w-4/5 bg-slate-700 px-5 h-16 cursor-pointer flex justify-between items-center mb-1 rounded-lg"
   onClick={Changepage}
   >
    <div>First Java</div>
    <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
   {Firstjava}
   <div className="w-4/5 bg-slate-700 px-5 h-16 cursor-pointer flex  justify-between items-center mb-1 rounded-lg">
   <div>Conditionals & Loops</div>
   <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
   

   <div className="w-4/5 bg-slate-700 px-5 h-16 cursor-pointer flex justify-between items-center mb-1 rounded-lg">
   <div>Functions</div>
   <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
   
   <div className="w-4/5 bg-slate-700 px-5 h-16 cursor-pointer flex  justify-between items-center mb-1 rounded-lg">
   <div>Arrays</div>
   <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
   
   <div className="w-4/5 bg-slate-700 px-5 h-16 cursor-pointer flex  justify-between items-center mb-1 rounded-lg">
   <div>Arrays 2</div>
   <img className='w-auto h-full bg-yellow-500' src={downArrow} alt="nothing" />
   </div>
   
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
   </div>
   
   ) 
}
export default All