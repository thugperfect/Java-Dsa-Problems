import "../styles/topics.css";
import { useEffect, useState } from "react";
import One from "../programs/firstJava/one";
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


  const changeProgram = (prog) => {
    onProgramChange(prog);
  };
  return (
    <div className="map">
      <div className="topics-logo">FirstJava</div>
      <div className="topics-body">
        <div className="topics-body-topics">
          <div
            onClick={() => changeProgram(<FirstJavaOne/>)}
            className="topic-point-left"
          >
            1
            <div className="topic-jist-left">
              Write a program to print whether a number is even or odd, also
              take input from the user.
            </div>
          </div>

          <div
            onClick={() => changeProgram(<FirstJavaTwo />)}
            className="topic-point-right"
          >
            2
            <div className="topic-jist-right">
              Take name as input and print a greeting message for that
              particular name.
            </div>
          </div>
        </div>
        <div className="topics-body-topics">
          <div
            onClick={() => changeProgram(<FirstJavaThree />)}
            className="topic-point-left"
          >
            3
            <div className="topic-jist-left">
              Write a program to input principal, time, and rate (P, T, R) from
              the user and find Simple Interest.
            </div>
          </div>
          <div
            onClick={() => changeProgram(<FirstJavaFour />)}
            className="topic-point-right"
          >
            4
            <div className="topic-jist-right">
              Take in two numbers and an operator (+, -, *, /) and calculate the
              value. (Use if conditions)
            </div>
          </div>
        </div>
        <div className="topics-body-topics">
          <div
            onClick={() => changeProgram(<FirstJavaFive />)}
            className="topic-point-left"
          >
            5
            <div className="topic-jist-left">
              Take 2 numbers as input and print the largest number.
            </div>
          </div>
          <div
            onClick={() => changeProgram(<FirstJavaSix />)}
            className="topic-point-right"
          >
            6
            <div className="topic-jist-right">
              Input currency in rupees and output in USD.
            </div>
          </div>
        </div>
        <div className="topics-body-topics">
          <div
            onClick={() => changeProgram(<FirstJavaSeven />)}
            className="topic-point-left"
          >
            7
            <div className="topic-jist-left">
              To calculate Fibonacci Series up to n numbers.
            </div>
          </div>
          <div
            onClick={() => changeProgram(<FirstJavaEight />)}
            className="topic-point-right"
          >
            8
            <div className="topic-jist-right">
              To find out whether the given String is Palindrome or not.
            </div>
          </div>
        </div>
        <div className="topics-body-topics">
          <div
            onClick={() => changeProgram(<FirstJavaNine />)}
            className="topic-point-left"
          >
            9
            <div className="topic-jist-left">
              To find Armstrong Number between two given number.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstJava;
