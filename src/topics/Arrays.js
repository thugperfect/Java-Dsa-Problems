import '../styles/topics.css'
import ArraysOne from "../programs/arrays/one"
import ArraysTwo from '../programs/arrays/two'
import ArraysThree from '../programs/arrays/three'
import ArraysTwentyone from '../programs/arrays/twentyone'
import ArraysTwenty from '../programs/arrays/twenty'
import ArraysNineteen from '../programs/arrays/nineteen'
import ArraysEighteen from '../programs/arrays/eighteen'
import ArraysSeventeen from '../programs/arrays/seventeen'
import ArraysSixteen from '../programs/arrays/sixteen'
import ArraysFifteen from '../programs/arrays/fifteen'
import ArraysFourteen from '../programs/arrays/fourteen'
import ArraysThirteen from '../programs/arrays/thirteen'
import ArraysTwelve from '../programs/arrays/twelve'
import ArraysEleven from '../programs/arrays/eleven'
import ArraysTen from '../programs/arrays/ten'
import ArraysNine from '../programs/arrays/nine'
import ArraysEight from '../programs/arrays/eight'
import ArraysSeven from '../programs/arrays/seven'
import ArraysSix from '../programs/arrays/six'
import ArraysFive from '../programs/arrays/five'
import ArraysFour from '../programs/arrays/four'
const Arrays = ({onProgramChange}) =>{
    const q1 = "1.Build Array from Permutation."
    const q2 = "2.Concatenation of Array."
    const q3 = "3.Running Sum of 1d Array."
    const q4 = "4.Richest Customer Wealth."
    const q5 = "5.Shuffle the Array."
    const q6 = "6.Kids With the Greatest Number of Candies."
    const q7 = "7.Number of Good Pairs."
    const q8 = "8.How Many Numbers Are Smaller Than the Current Number."
    const q9 = "9.Create Target Array in the Given Order."
    const q10 = "10.Check if the Sentence Is Pangram."
    const q11 = "11.Count Items Matching a Rule."
    const q12 = "12.Find the Highest Altitude. "
    const q13 = "13.flipping an image."
    const q14 = "14.cells with odd values in a matrix."
    const q15 = "15.matrix diagonal sum."
    const q16 = "16.find numbers with even number of digits."
    const q17 = "17. transpose matrix."
    const q18 = "18.Add to Array-Form of Integer."
    const q19 = "19.Maximum Population Year."
    const q20 = "20.Determine Whether Matrix Can Be Obtained By Rotation."
    const q21 = "21.tow sum."

    const changeProgram = (prog) =>{
        onProgramChange(prog)
    }

    return(<div className='map'>
    <div className="topics-logo">Arrays</div>
    <div className='topics-body'>
        <div className='topics-body-topics'>
            <div onClick={() => changeProgram(<ArraysOne qn={q1} backPage={changeProgram}/>)} className='topic-point-left'>1
            
            <div className='topic-jist-left'>{q1}</div>
            </div>
            <div onClick={() => changeProgram(<ArraysTwo qn={q2} backPage={changeProgram}/>)}  className='topic-point-right'>2
            
            <div className='topic-jist-right'>{q2}</div></div>
        </div>
        <div className='topics-body-topics'>
        <div  onClick={() => changeProgram(<ArraysThree qn={q3} backPage={changeProgram}/>)} className='topic-point-left'>3
        <div className='topic-jist-left'>{q3}</div>
        </div>
            <div  onClick={() => changeProgram(<ArraysFour qn={q4} backPage={changeProgram}/>)} className='topic-point-right'>4
            <div className='topic-jist-right'>{q4}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={() => changeProgram(<ArraysFive qn={q5} backPage={changeProgram}/>)} className='topic-point-left'>5
        <div className='topic-jist-left'>{q5}</div>
        </div>
            <div onClick={() => changeProgram(<ArraysSix qn={q6} backPage={changeProgram}/>)} className='topic-point-right'>6
            
            <div className='topic-jist-right'>{q6}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={() => changeProgram(<ArraysSeven qn={q7} backPage={changeProgram}/>)} className='topic-point-left'>7
        <div className='topic-jist-left'>{q7}</div>
        </div>
            <div onClick={() => changeProgram(<ArraysEight qn={q8} backPage={changeProgram}/>)} className='topic-point-right'>8
            <div className='topic-jist-right'>{q8}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={() => changeProgram(<ArraysNine qn={q9} backPage={changeProgram}/>)} className='topic-point-left'>9
        <div className='topic-jist-left'>{q9}</div>
        </div>
            <div onClick={() => changeProgram(<ArraysTen qn={q10} backPage={changeProgram}/>)} className='topic-point-right'>10
            <div className='topic-jist-right'>{q10}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={() => changeProgram(<ArraysEleven qn={q11} backPage={changeProgram}/>)} className='topic-point-left'>11
        <div className='topic-jist-left'>{q11}</div>
        </div>
            <div onClick={() => changeProgram(<ArraysTwelve qn={q12} backPage={changeProgram}/>)} className='topic-point-right'>12
            <div className='topic-jist-right'>{q12}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={() => changeProgram(<ArraysThirteen qn={q13} backPage={changeProgram}/>)} className='topic-point-left'>13
        <div className='topic-jist-left'>{q13}</div>
        </div>
            <div onClick={() => changeProgram(<ArraysFourteen qn={q14} backPage={changeProgram}/>)} className='topic-point-right'>14
            <div className='topic-jist-right'>{q14}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={() => changeProgram(<ArraysFifteen qn={q15} backPage={changeProgram}/>)} className='topic-point-left'>15
        <div className='topic-jist-left'>{q15}</div>
        </div>
            <div onClick={() => changeProgram(<ArraysSixteen qn={q16} backPage={changeProgram}/>)} className='topic-point-right'>16
            <div className='topic-jist-right'>{q16}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={() => changeProgram(<ArraysSeventeen qn={q17} backPage={changeProgram}/>)} className='topic-point-left'>17
        <div className='topic-jist-left'>{q17}</div>
        </div>
            <div onClick={() => changeProgram(<ArraysEighteen qn={q18} backPage={changeProgram}/>)} className='topic-point-right'>18
            <div className='topic-jist-right'>{q18}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={() => changeProgram(<ArraysNineteen qn={q19} backPage={changeProgram}/>)} className='topic-point-left'>19
        <div className='topic-jist-left'>{q19}</div>
        </div>
            <div onClick={() => changeProgram(<ArraysTwenty qn={q20} backPage={changeProgram}/>)} className='topic-point-right'>20
            <div className='topic-jist-right'>{q20}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div onClick={() => changeProgram(<ArraysTwentyone qn={q21} backPage={changeProgram}/>)} className='topic-point-left'>21
        <div className='topic-jist-left'>{q21}</div>
        </div>
         
        </div>
        

    </div>
    </div>)
}
export default Arrays