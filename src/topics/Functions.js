import '../styles/topics.css'
import FunctionsOne from '../programs/functions/one'
import FunctionsTwo from '../programs/functions/two'
import FunctionsThree from '../programs/functions/three'
import FunctionsFour from '../programs/functions/four'
import FunctionsFive from '../programs/functions/five'
import FunctionsSix from '../programs/functions/six'
import FunctionsSeven from '../programs/functions/seven'
import FunctionsEight from '../programs/functions/eight'
import FunctionsNine from '../programs/functions/nine'
import FunctionsTen from '../programs/functions/ten'
import FunctionsEleven from '../programs/functions/eleven'
import FunctionsTwelve from '../programs/functions/twelve'
import FunctionsThirteen from '../programs/functions/thirteen'
const Functions = ({onProgramChange}) =>{
    const q1 = "1.Define two methods to print the maximum and the minimum number respectively among three numbers entered by the user."
    const q2 = "2.Define a program to find out whether a given number is even or odd."
    const q3 = "3.A person is eligible to vote if his/her age is greater than or equal to 18. Define a method to find out if he/she is eligible to vote."
    const q4 = "4.Write a program to print the sum of two numbers entered by user by defining your own method."
    const q5 = "5.Define a method that returns the product of two numbers entered by user."
    const q6 = "6.Write a program to print the circumference and area of a circle of radius entered by user by defining your own method."
    const q7 = "7.Define a method to find out if a number is prime or not."
    const q8 = "8.Write a program that will ask the user to enter his/her marks (out of 100). Define a method that will display grades according to the marks entered"
    const q9  = "9.Write a program to print the factorial of a number by defining a method named 'Factorial'."
    const q10 = "10.Write a function to find if a number is a palindrome or not. Take number as parameter."
    const q11 = "11.Write a function to check if a given triplet is a Pythagorean triplet or not."
    const q12 = "12.Write a function that returns all prime numbers between two given numbers."
    const q13 = "13.Write a function that returns the sum of first n natural numbers."

    const changeProgram = (prog) =>{
    onProgramChange(prog)
    }
    return(<div className='map'>
    <div className="topics-logo">Functions</div>
    <div className='topics-body'>
        <div className='topics-body-topics'>
            <div  onClick={() => changeProgram(<FunctionsOne qn={q1} qn1 ={q2} backPage={changeProgram}/>)} className='topic-point-left'>1
            
            <div className='topic-jist-left'>{q1}</div>
            </div>
            <div onClick={() => changeProgram(<FunctionsTwo qn={q2} qn1={q3} backPage={changeProgram}/>)} className='topic-point-right'>2
            
            <div className='topic-jist-right'>{q2}</div></div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={() => changeProgram(<FunctionsThree qn={q3} qn1={q4} backPage={changeProgram}/>)} className='topic-point-left'>3
        <div className='topic-jist-left'>{q3}</div>
        </div>
            <div onClick={() => changeProgram(<FunctionsFour qn={q4} qn1={q5} backPage={changeProgram}/>)} className='topic-point-right'>4
            <div className='topic-jist-right'>{q4}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={() => changeProgram(<FunctionsFive qn={q5} qn1={q6} backPage={changeProgram}/>)} className='topic-point-left'>5
        <div className='topic-jist-left'>{q5}</div>
        </div>
            <div onClick={() => changeProgram(<FunctionsSix qn={q6} qn1={q7} backPage={changeProgram}/>)} className='topic-point-right'>6
            
            <div className='topic-jist-right'>{q6}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={() => changeProgram(<FunctionsSeven qn={q7} qn1={q8} backPage={changeProgram}/>)} className='topic-point-left'>7
        <div className='topic-jist-left'>{q7}</div>
        </div>
            <div onClick={() => changeProgram(<FunctionsEight qn={q8} qn1={q9} backPage={changeProgram}/>)} className='topic-point-right'>8
            <div className='topic-jist-right'>{q8}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={() => changeProgram(<FunctionsNine qn={q9} qn1={q10} backPage={changeProgram}/>)} className='topic-point-left'>9
        <div className='topic-jist-left'>{q9}</div>
        </div>
            <div onClick={() => changeProgram(<FunctionsTen qn={q10} qn1={q11} backPage={changeProgram}/>)} className='topic-point-right'>10
            <div className='topic-jist-right'>{q10}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={() => changeProgram(<FunctionsEleven qn={q11} qn1={q12} backPage={changeProgram}/>)} className='topic-point-left'>11
        <div className='topic-jist-left'>{q11}</div>
        </div>
            <div onClick={() => changeProgram(<FunctionsTwelve qn={q12} qn1={q13} backPage={changeProgram}/>)} className='topic-point-right'>12
            <div className='topic-jist-right'>{q12}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={() => changeProgram(<FunctionsThirteen qn={q13} backPage={changeProgram}/>)} className='topic-point-left'>13
        <div className='topic-jist-left'>{q13}</div>
        </div>
           
        </div>
        

    </div>
    </div>)
}
export default Functions