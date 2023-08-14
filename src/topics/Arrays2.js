import '../styles/topics.css'

const Arrays2 = ({onProgramChange}) =>{
    const q1 = "1.Find N Unique Integers Sum up to Zero"
    const q2 = "2.Lucky Number In a Matrix"
    const q3 = "3.Maximum Subarray"
    const q4 = "4.Reshape the Matrix"
    const q5 = "5.Plus One"
    const q6 = "6.Remove Duplicates from Sorted Array"
    const q7 = "7.Minimum Cost to Move Chips to The Same Position"
    const q8 = "8.Spiral Matrix"
    const q9 = "9.Spiral Matrix II"
    const q10 = "10.Spiral Matrix III"
    const q11 = "11.Set Matrix Zeroes"
    const q12 = "12.Product of Array Except Self"
    const q13 = "13.Find First and Last Position of Element in Sorted Array"
    const q14 = "14.Jump Game"
    const q15 = "15.Rotate Array"
    const q16 = "16.Sort Colors"
    const q17 = "17.House Robber"
    const q18 = "18.Max Value of Equation"
    const q19 = "19.First Missing Positive"
    const q20 = "20.First Missing Positive"
   

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
        
        

    </div>
    </div>)
}
export default Arrays2