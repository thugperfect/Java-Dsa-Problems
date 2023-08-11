import "../styles/topics.css";
import FirstJavaOne from "../programs/firstJava/one";
import FirstJavaTwo from "../programs/firstJava/two";
import FirstJavaThree from "../programs/firstJava/three";
import FirstJavaFour from "../programs/firstJava/four";
import FirstJavaFive from "../programs/firstJava/five";
import FirstJavaSix from "../programs/firstJava/six";
import FirstJavaSeven from "../programs/firstJava/seven";
import FirstJavaEight from "../programs/firstJava/eight";
import FirstJavaNine from "../programs/firstJava/nine";
const FirstJava = ({onProgramChange}) => {

const q1 = "Write a program to print whether a number is even or odd, also take input from the user."
const q2 = "Take name as input and print a greeting message for that particular name."
const q3 = "Write a program to input principal, time, and rate (P, T, R) from the user and find Simple Interest."
const q4 = "Take in two numbers and an operator (+, -, *, /) and calculate the value. (Use if conditions)"
const q5 = "Take 3 numbers as input and print the largest number."
const q6 = "Input currency in rupees and output in USD."
const q7 = "To calculate Fibonacci Series up to n numbers."
const q8 = "To find out whether the given String is Palindrome or not."
const q9 = "To find Armstrong Number between two given number."


  const changeProgram = (prog) => {
    onProgramChange(prog);
  };
  return (
    <div className="map">
      <div className="topics-logo">FirstJava</div>
      <div className="topics-body">
        <div className="topics-body-topics">
          <div
            onClick={() => changeProgram(<FirstJavaOne qn={q1} backPage={changeProgram}/>)}
            className="topic-point-left"
          >
            1
            <div className="topic-jist-left">
             {q1}
            </div>
          </div>

          <div
            onClick={() => changeProgram(<FirstJavaTwo qn={q2}/>)}
            className="topic-point-right"
          >
            2
            <div className="topic-jist-right">
            {q2}
            </div>
          </div>
        </div>
        <div className="topics-body-topics">
          <div
            onClick={() => changeProgram(<FirstJavaThree qn={q3} />)}
            className="topic-point-left"
          >
            3
            <div className="topic-jist-left">
             {q3}
            </div>
          </div>
          <div
            onClick={() => changeProgram(<FirstJavaFour qn={q4} />)}
            className="topic-point-right"
          >
            4
            <div className="topic-jist-right">
            {q4}
            </div>
          </div>
        </div>
        <div className="topics-body-topics">
          <div
            onClick={() => changeProgram(<FirstJavaFive qn={q5} />)}
            className="topic-point-left"
          >
            5
            <div className="topic-jist-left">
             {q5}
            </div>
          </div>
          <div
            onClick={() => changeProgram(<FirstJavaSix qn={q6}/>)}
            className="topic-point-right"
          >
            6
            <div className="topic-jist-right">
        {q6}
            </div>
          </div>
        </div>
        <div className="topics-body-topics">
          <div
            onClick={() => changeProgram(<FirstJavaSeven qn={q7}/>)}
            className="topic-point-left"
          >
            7
            <div className="topic-jist-left">
              {q7}
            </div>
          </div>
          <div
            onClick={() => changeProgram(<FirstJavaEight qn={q8}/>)}
            className="topic-point-right"
          >
            8
            <div className="topic-jist-right">
              {q8}
            </div>
          </div>
        </div>
        <div className="topics-body-topics">
          <div
            onClick={() => changeProgram(<FirstJavaNine qn={q9}/>)}
            className="topic-point-left"
          >
            9
            <div className="topic-jist-left">
              {q9}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstJava;
