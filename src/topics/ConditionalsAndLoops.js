
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
    return(<div className='map'>
    <div className="topics-logo">ConditionalsAndLoops</div>
    <div className='topics-body'>
        <div className='topics-body-topics'>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsOne/>)} className='topic-point-left'>1
            
            <div className='topic-jist-left'>Fibonacci Series In Java Programs</div>
            </div>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsTwo/>)} className='topic-point-right'>2
            
            <div className='topic-jist-right'>Subtract the Product and Sum of Digits of an Integer</div></div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={()=>changeProgram(<ConditionalsAndLoopsThree/>)} className='topic-point-left'>3
        <div className='topic-jist-left'>Input a number and print all the factors of that number (use loops).
</div>
        </div>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsFour/>)} className='topic-point-right'>4
            <div className='topic-jist-right'>Take integer inputs till the user enters 0 and print the sum of all numbers (HINT: while loop)</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={()=>changeProgram(<ConditionalsAndLoopsFive/>)} className='topic-point-left'>5
        <div className='topic-jist-left'>Take integer inputs till the user enters 0 and print the largest number from all.</div>
        </div>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsSix/>)} className='topic-point-right'>6
            
            <div className='topic-jist-right'>Factorial Program In Java</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={()=>changeProgram(<ConditionalsAndLoopsSeven/>)} className='topic-point-left'>7
        <div className='topic-jist-left'>Calculate Electricity Bill</div>
        </div>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsEight/>)} className='topic-point-right'>8
            <div className='topic-jist-right'>Calculate Average Of N Numbers</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={()=>changeProgram(<ConditionalsAndLoopsNine/>)} className='topic-point-left'>9
        <div className='topic-jist-left'>Calculate Discount Of Product</div>
        </div>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsTen/>)} className='topic-point-right'>10
            <div className='topic-jist-right'>Calculate Distance Between Two Points</div>
            </div>
            </div>
            <div className='topics-body-topics'>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsEleven/>)} className='topic-point-left'>11
            
            <div className='topic-jist-left'>Calculate Commission Percentage</div>
            </div>

            <div onClick={()=>changeProgram(<ConditionalsAndLoopsTwelve/>)} className='topic-point-right'>12
            
            <div className='topic-jist-right'>Calculate CGPA Java Program</div></div>
        </div>
            </div>

           
        <div className='topics-body-topics'>
        <div onClick={()=>changeProgram(<ConditionalsAndLoopsThirteen/>)} className='topic-point-left'>13
        <div className='topic-jist-left'>Sum Of N Numbers
</div>
        </div>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsFourteen/>)} className='topic-point-right'>14
            <div className='topic-jist-right'>Armstrong Number In Java</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={()=>changeProgram(<ConditionalsAndLoopsFifteen/>)} className='topic-point-left'>15
        <div className='topic-jist-left'>Find Ncr & Npr</div>
        </div>
            <div  onClick={()=>changeProgram(<ConditionalsAndLoopsSixteen/>)} className='topic-point-right'>16
            
            <div className='topic-jist-right'>Reverse A String In Java</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={()=>changeProgram(<ConditionalsAndLoopsSeventeen/>)} className='topic-point-left'>17
        <div className='topic-jist-left'>Find if a number is palindrome or not</div>
        </div>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsEighteen/>)} className='topic-point-right'>18
            <div className='topic-jist-right'>HCF & LCM Of Two Numbers Program</div>
            </div>
        </div>

  

            <div className='topics-body-topics'>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsNineteen/>)} className='topic-point-left'>19
            
            <div className='topic-jist-left'>Check Leap Year Or Not</div>
            </div>
            <div onClick={()=>changeProgram(<ConditionalsAndLoopsTwenty/>)} className='topic-point-right'>20
            
            <div className='topic-jist-right'>Write a program to print the sum of negative numbers, sum of positive even numbers and the sum of positive odd numbers from a list of numbers (N) entered by the user. The list terminates when the user enters a zero.</div></div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={()=>changeProgram(<ConditionalsAndLoopsTwentyone/>)} className='topic-point-left'>21
        <div className='topic-jist-left'>Kunal is allowed to go out with his friends only on the even days of a given month. Write a program to count the number of days he can go out in the month of August.
</div>
        </div>
            
        </div>
            

            
        </div>
        

   )
}
export default ConditionalsAndLoops