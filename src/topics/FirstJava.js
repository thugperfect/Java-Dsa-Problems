import "../styles/topics.css";
import FirstJavaOne from "../programs/firstJava/one";
import FirstJavaTwo from "../programs/firstJava/two";
import FirstJavaThree from "../programs/firstJava/three";
import FirstJavaFour from "../programs/firstJava/four";
import FirstJavaFive from "../programs/firstJava/five";
import FirstJavaSix from "../programs/firstJava/six";
import FirstJavaSeven from "../programs/firstJava/seven";
import FirstJavaEight from "../programs/firstJava/eight";

import { useState,useEffect } from 'react'

const FirstJava = ({onProgramChange}) => {
const [javaFile,setJavaFile] = useState(" ")

const url = window.location.href
const [file,setFile] = useState("")


  const fileUrl = `${url}javaPrograms/firstJava/${javaFile}.java`
 


  console.log("fileUrl "+fileUrl);

      
      useEffect(()=>{
     
async function fetchFile() {
  try{
      const res = await fetch(fileUrl)
 
      const cont = await res.text();
      
      setFile(cont)
      }
      catch(err){
      console.log(err);
      }

  }
  
        
      
  fetchFile() 
  console.log(javaFile);
},[javaFile,fileUrl])


const q1 = "Write a program to print whether a number is even or odd, also take input from the user."
const q2 = "Take name as input and print a greeting message for that particular name."
const q3 = "Write a program to input principal, time, and rate (P, T, R) from the user and find Simple Interest."
const q4 = "Take in two numbers and an operator (+, -, *, /) and calculate the value. (Use if conditions)"
const q5 = "Take 3 numbers as input and print the largest number."
const q6 = "Input currency in rupees and output in USD."
const q7 = "To calculate Fibonacci Series up to n numbers."
const q8 = "To find out whether the given String is Palindrome or not."
const q9 = "To find Armstrong Number between two given number."
console.log(javaFile);

  const changeProgram = (prog) => {
    onProgramChange(prog);
  };
  const handleProgramChangeOne =(n) =>{
    changeProgram(<FirstJavaOne qn={q1} file={file} backPage={changeProgram}/>)
    setJavaFile('One')
  
  }
  const handleProgramChangeTwo = () =>{
    changeProgram(<FirstJavaOne qn={q2} file ={file} backPage={changeProgram}/>)
    setJavaFile('Two')
    console.log(javaFile);
  }
  const handleProgramChangeThree = () =>{
    changeProgram(<FirstJavaOne qn={q3} backPage={changeProgram}/>)
    setJavaFile('Three')
    console.log(javaFile);
  }
  const handleProgramChangeFour = () =>{
    changeProgram(<FirstJavaOne qn={q4} backPage={changeProgram}/>)
    setJavaFile('Four')
    console.log(javaFile);
  }
  const handleProgramChangeFive = () =>{
    changeProgram(<FirstJavaOne qn={q5} backPage={changeProgram}/>)
    setJavaFile('Five')
    console.log(javaFile);
  }
  const handleProgramChangeSix = () =>{
    changeProgram(<FirstJavaOne qn={q6} backPage={changeProgram}/>)
    setJavaFile('Six')
    console.log(javaFile);
  }
  const handleProgramChangeSeven = () =>{
    changeProgram(<FirstJavaOne qn={q7} backPage={changeProgram}/>)
    setJavaFile('Seven')
    console.log(javaFile);
  }
  const handleProgramChangeEight = () =>{
    changeProgram(<FirstJavaOne qn={q8} backPage={changeProgram}/>)
    setJavaFile('Eight')
    console.log(javaFile);
  }
  const handleProgramChangeNine = () =>{
    changeProgram(<FirstJavaOne qn={q9} backPage={changeProgram}/>)
    setJavaFile('Nine')
    console.log(javaFile);
  }
 
  return (
 
    <div className="map">

      <div className="topics-logo">FirstJava</div>
      <div className="topics-body">
        <div className="topics-body-topics">
          <div
            onClick={handleProgramChangeOne}
            className="topic-point-left"
          >
            1
            <div className="topic-jist-left">
             {q1}
            </div>
          </div>

          <div
            onClick={handleProgramChangeTwo}
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
            onClick={handleProgramChangeThree}
            className="topic-point-left"
          >
            3
            <div className="topic-jist-left">
             {q3}
            </div>
          </div>
          <div
            onClick={handleProgramChangeFour}
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
            onClick={handleProgramChangeFive}
            className="topic-point-left"
          >
            5
            <div className="topic-jist-left">
             {q5}
            </div>
          </div>
          <div
            onClick={handleProgramChangeSix}
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
            onClick={handleProgramChangeSeven}
            className="topic-point-left"
          >
            7
            <div className="topic-jist-left">
              {q7}
            </div>
          </div>
          <div
            onClick={handleProgramChangeEight}
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
            onClick={handleProgramChangeNine}
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
