import PageChanger from "../topics/PageChanger"
const FunctionsMain = ({onProgramChange}) =>{
    const q1 = "Define two methods to print the maximum and the minimum number respectively among three numbers entered by the user."
    const q2 = "Define a program to find out whether a given number is even or odd."
    const q3 = "A person is eligible to vote if his/her age is greater than or equal to 18. Define a method to find out if he/she is eligible to vote."
    const q4 = "Write a program to print the sum of two numbers entered by user by defining your own method."
    const q5 = "Define a method that returns the product of two numbers entered by user."
    const q6 = "Write a program to print the circumference and area of a circle of radius entered by user by defining your own method."
    const q7 = "Define a method to find out if a number is prime or not."
    const q8 = "Write a program that will ask the user to enter his/her marks (out of 100). Define a method that will display grades according to the marks entered"
    const q9  = "Write a program to print the factorial of a number by defining a method named 'Factorial'."
    const q10 = "A function to find if a number is a palindrome or not. Take number as parameter."
    const q11 = "A function to check if a given triplet is a Pythagorean triplet or not."
    const q12 = "A function that returns all prime numbers between two given numbers."
    const q13 = "A function that returns the sum of first n natural numbers."

    const ChangePage=(prop)=>{
        onProgramChange(prop)
    }
    return(<div className="w-4/5  container flex flex-col items-center">
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
     onClick={()=>ChangePage(<PageChanger mod={3.1}/>)}>
        1. {q1}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={3.2}/>)}>
        2. {q2}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={3.3}/>)}>
        3. {q3}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={3.4}/>)}>
        4. {q4}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={3.5}/>)}>
        5. {q5}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={3.6}/>)}>
        6. {q6}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={3.7}/>)}>
        7. {q7}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={3.8}/>)}>
        8. {q8}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={3.9}/>)}>
        9. {q9}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={3.101}/>)}>
        10. {q10}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={3.11}/>)}>
        11. {q11}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={3.12}/>)}>
        12. {q12}
    </div>
    <div className="h-auto p-5 cursor-pointer w-4/5 bg-slate-600 px-4 mb-1 rounded-lg"
    onClick={()=>ChangePage(<PageChanger mod={3.13}/>)}>
        13. {q13}
    </div>
    </div>
    )
}
export default FunctionsMain