import PageChanger from "../topics/PageChanger"
const ConditionalsMain = ({onProgramChange}) =>{
    const q1 = "Fibonacci Series In Java Programs"
    const q2 = "Subtract the Product and Sum of Digits of an Integer"
    const q3 = "Input a number and print all the factors of that number (use loops)."
    const q4 = "Take integer inputs till the user enters 0 and print the sum of all numbers (HINT: while loop)"
    const q5 = "Take integer inputs till the user enters 0 and print the largest number from all."
    const q6 = "Factorial Program In Java"
    const q7 = "Calculate Electricity Bill"
    const q8 = "Calculate Average Of N Numbers"
    const q9 = "Calculate Discount Of Product"
    const q10 = "Calculate Distance Between Two Points"
    const q11 = "Calculate Commission Percentage"
    const q12 = "Calculate CGPA Java Program"
    const q13 = "Sum Of N Numbers"
    const q14 = "Armstrong Number In Java"
    const q15 = "Find Ncr & Npr"
    const q16 = "Reverse A String In Java"
    const q17 = "Find if a number is palindrome or not"
    const q18 = "HCF & LCM Of Two Numbers Program"
    const q19 = "Check Leap Year Or Not"
    const q20 = "Write a program to print the sum of negative numbers, sum of positive even numbers and the sum of positive odd numbers from a list of numbers (N) entered by the user. The list terminates when the user enters a zero."
    const q21 = "Kunal is allowed to go out with his friends only on the even days of a given month. Write a program to count the number of days he can go out in the month of August."
    const ChangePage =(prop)=>{
        onProgramChange(prop)
    }
    return(<div className="w-4/5  container flex flex-col items-center">
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
     onClick={()=>ChangePage(<PageChanger mod={2.1}/>)}>
        1. {q1}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={2.2}/>)}>
        2. {q2}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={2.3}/>)}>
        3. {q3}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={2.4}/>)}>
        4. {q4}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={2.5}/>)}>
        5. {q5}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={2.6}/>)}>
        6. {q6}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={2.7}/>)}>
        7. {q7}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={2.8}/>)}>
        8. {q8}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={2.9}/>)}>
        9. {q9}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={2.101}/>)}>
        10. {q10}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={2.11}/>)}>
        11. {q11}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={2.12}/>)}>
        12. {q12}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={2.13}/>)}>
        13. {q13}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={2.14}/>)}>
        14. {q14}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={2.15}/>)}>
        15. {q15}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={2.16}/>)}>
        16. {q16}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={2.17}/>)}>
        17. {q17}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={2.18}/>)}>
        18. {q18}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={2.19}/>)}>
        19. {q19}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={2.201}/>)}>
        20. {q20}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={2.21}/>)}>
        21. {q21}
    </div>
  
   
   </div>) 
}
export default ConditionalsMain