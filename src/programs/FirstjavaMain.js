import PageChanger from "../topics/PageChanger"
const FirstjavaMain = ({onProgramChange}) =>{
const q1 = "Write a program to print whether a number is even or odd, also take input from the user."
const q2 = "Take name as input and print a greeting message for that particular name."
const q3 = "Write a program to input principal, time, and rate (P, T, R) from the user and find Simple Interest."
const q4 = "Take in two numbers and an operator (+, -, *, /) and calculate the value. (Use if conditions)"
const q5 = "Take 3 numbers as input and print the largest number."
const q6 = "Input currency in rupees and output in USD."
const q7 = "To calculate Fibonacci Series up to n numbers."
const q8 = "To find out whether the given String is Palindrome or not."
const q9 = "To find Armstrong Number between two given number."
const ChangePage = (prop) =>{
    onProgramChange(prop)
}
   return(<div className="w-4/5  container flex flex-col items-center">
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={1.1}/>)}
    >
        1. {q1}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={1.2}/>)}>
        2. {q2}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
     onClick={()=>ChangePage(<PageChanger mod={1.3}/>)}>
        3. {q3}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
     onClick={()=>ChangePage(<PageChanger mod={1.4}/>)}>
        4. {q4}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
     onClick={()=>ChangePage(<PageChanger mod={1.5}/>)}>
        5. {q5}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
     onClick={()=>ChangePage(<PageChanger mod={1.6}/>)}>
        6. {q6}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
     onClick={()=>ChangePage(<PageChanger mod={1.7}/>)}>
        7. {q7}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
     onClick={()=>ChangePage(<PageChanger mod={1.8}/>)}>
        8. {q8}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
     onClick={()=>ChangePage(<PageChanger mod={1.9}/>)}>
        9. {q9}
    </div>
  
   
   </div>) 
}

export default FirstjavaMain