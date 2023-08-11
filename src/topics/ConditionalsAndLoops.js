
import '../styles/topics.css'
import ConditionalsAndLoopsOne from '../programs/conditionalsAndLoops/one'
import ConditionalsAndLoopsTwo from '../programs/conditionalsAndLoops/two'
import ConditionalsAndLoopsThree from '../programs/conditionalsAndLoops/three'
import ConditionalsAndLoopsFour from '../programs/conditionalsAndLoops/four'
import ConditionalsAndLoopsFive from '../programs/conditionalsAndLoops/five'
import ConditionalsAndLoopsSix from '../programs/conditionalsAndLoops/six'
import ConditionalsAndLoopsSeven from '../programs/conditionalsAndLoops/seven'
import ConditionalsAndLoopsEight from '../programs/conditionalsAndLoops/eight'
import ConditionalsAndLoopsNine from '../programs/conditionalsAndLoops/nine'
import ConditionalsAndLoopsTen from '../programs/conditionalsAndLoops/ten'
import ConditionalsAndLoopsEleven from '../programs/conditionalsAndLoops/eleven'
import ConditionalsAndLoopsTwelve from '../programs/conditionalsAndLoops/twelve'
import ConditionalsAndLoopsThirteen from '../programs/conditionalsAndLoops/thirteen'
import ConditionalsAndLoopsFourteen from '../programs/conditionalsAndLoops/fourteen'
import ConditionalsAndLoopsFifteen from '../programs/conditionalsAndLoops/fifteen'
import ConditionalsAndLoopsSixteen from '../programs/conditionalsAndLoops/sixteen'
import ConditionalsAndLoopsSeventeen from '../programs/conditionalsAndLoops/seventeen'
import ConditionalsAndLoopsEighteen from '../programs/conditionalsAndLoops/eighteen'
import ConditionalsAndLoopsNineteen from '../programs/conditionalsAndLoops/nineteen'
import ConditionalsAndLoopsTwenty from '../programs/conditionalsAndLoops/twenty'
import ConditionalsAndLoopsTwentyone from '../programs/conditionalsAndLoops/twentyone'


const ConditionalsAndLoops = ({onProgramChange}) =>{
    const changeProgram = (prog) =>{
        onProgramChange(prog)
    }

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
 

    

    return(<div className='map'>
    <div className="topics-logo">ConditionalsAndLoops</div>
    <div className='topics-body'>
        <div className='topics-body-topics'>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsOne qn={q1} backPage = {changeProgram}/>)} className='topic-point-left'>1
            
            <div className='topic-jist-left'>{q1}</div>
            </div>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsTwo qn={q2} backPage = {changeProgram}/>)} className='topic-point-right'>2
            
            <div className='topic-jist-right'>{q2}</div></div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={()=>changeProgram(<ConditionalsAndLoopsThree qn={q3} backPage = {changeProgram}/>)} className='topic-point-left'>3
        <div className='topic-jist-left'>{q3}
</div>
        </div>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsFour qn={q4} backPage = {changeProgram}/>)} className='topic-point-right'>4
            <div className='topic-jist-right'>
                {q4}
            </div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={()=>changeProgram(<ConditionalsAndLoopsFive qn={q5} backPage = {changeProgram}/>)} className='topic-point-left'>5
        <div className='topic-jist-left'>
            {q5}
        </div>
        </div>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsSix qn={q6} backPage = {changeProgram}/>)} className='topic-point-right'>6
            
            <div className='topic-jist-right'>{q6}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={()=>changeProgram(<ConditionalsAndLoopsSeven qn={q7} backPage = {changeProgram}/>)} className='topic-point-left'>7
        <div className='topic-jist-left'>{q7}</div>
        </div>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsEight qn={q8} backPage = {changeProgram}/>)} className='topic-point-right'>8
            <div className='topic-jist-right'>{q8}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={()=>changeProgram(<ConditionalsAndLoopsNine qn={q9} backPage = {changeProgram}/>)} className='topic-point-left'>9
        <div className='topic-jist-left'>{q9}</div>
        </div>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsTen qn={q10}backPage = {changeProgram}/>)} className='topic-point-right'>10
            <div className='topic-jist-right'>{q10}</div>
            </div>
            </div>
            <div className='topics-body-topics'>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsEleven qn={q11} backPage = {changeProgram}/>)} className='topic-point-left'>11
            
            <div className='topic-jist-left'>{q11}</div>
            </div>

            <div onClick={()=>changeProgram(<ConditionalsAndLoopsTwelve qn={q12} backPage = {changeProgram}/>)} className='topic-point-right'>12
            
            <div className='topic-jist-right'>{q12}</div></div>
        </div>
            </div>

           
        <div className='topics-body-topics'>
        <div onClick={()=>changeProgram(<ConditionalsAndLoopsThirteen qn={q13} backPage = {changeProgram}/>)} className='topic-point-left'>13
        <div className='topic-jist-left'>{q13}
</div>
        </div>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsFourteen qn={q14} backPage = {changeProgram}/>)} className='topic-point-right'>14
            <div className='topic-jist-right'>{q14}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={()=>changeProgram(<ConditionalsAndLoopsFifteen qn={q15} backPage = {changeProgram}/>)} className='topic-point-left'>15
        <div className='topic-jist-left'>{q15}</div>
        </div>
            <div  onClick={()=>changeProgram(<ConditionalsAndLoopsSixteen qn={q16} backPage = {changeProgram}/>)} className='topic-point-right'>16
            
            <div className='topic-jist-right'>{q16}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={()=>changeProgram(<ConditionalsAndLoopsSeventeen qn={q17} backPage = {changeProgram}/>)} className='topic-point-left'>17
        <div className='topic-jist-left'>{q17}</div>
        </div>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsEighteen qn={q18} backPage = {changeProgram}/>)} className='topic-point-right'>18
            <div className='topic-jist-right'>{q18}</div>
            </div>
        </div>

  

            <div className='topics-body-topics'>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsNineteen qn={q19} backPage = {changeProgram}/>)} className='topic-point-left'>19
            
            <div className='topic-jist-left'>{q19}</div>
            </div>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsTwenty qn={q20} backPage = {changeProgram}/>)} className='topic-point-right'>20
            
            <div className='topic-jist-right'>{q20}</div></div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={()=>changeProgram(<ConditionalsAndLoopsTwentyone qn={q21} backPage = {changeProgram}/>)} className='topic-point-left'>21
        <div className='topic-jist-left'>{q21}
</div>
        </div>
            
        </div>
            

            
        </div>
        

   )
}
export default ConditionalsAndLoops