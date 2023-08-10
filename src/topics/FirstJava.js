import '../styles/topics.css'
import { useEffect } from 'react'
import One from "../programs/firstJava/one"
const FirstJava = () =>{

    
    return(<div className='map'>
        <div className="topics-logo">FirstJava</div>
        <div className='topics-body'>
            <div className='topics-body-topics'>
                <div className='topic-point-left'>1
                
                <div className='topic-jist-left'>Write a program to print whether a number is even or odd, also take input from the user.</div>
                </div>

                <div className='topic-point-right'>2
                
                <div className='topic-jist-right'>Take name as input and print a greeting message for that particular name.</div></div>
            </div>
            <div className='topics-body-topics'>
            <div className='topic-point-left'>3
            <div className='topic-jist-left'>Write a program to input principal, time, and rate (P, T, R) from the user and find Simple Interest.</div>
            </div>
                <div className='topic-point-right'>4
                <div className='topic-jist-right'>Take in two numbers and an operator (+, -, *, /) and calculate the value. (Use if conditions)</div>
                </div>
            </div>
            <div className='topics-body-topics'>
            <div className='topic-point-left'>5
            <div className='topic-jist-left'>Take 2 numbers as input and print the largest number.</div>
            </div>
                <div className='topic-point-right'>6
                
                <div className='topic-jist-right'>Input currency in rupees and output in USD.</div>
                </div>
            </div>
            <div className='topics-body-topics'>
            <div className='topic-point-left'>7
            <div className='topic-jist-left'>To calculate Fibonacci Series up to n numbers.</div>
            </div>
                <div className='topic-point-right'>8
                <div className='topic-jist-right'>To find out whether the given String is Palindrome or not.</div>
                </div>
            </div>
            <div className='topics-body-topics'>
            <div className='topic-point-left'>9
            <div className='topic-jist-left'>To find Armstrong Number between two given number.</div>
            </div>
             
            </div>
            

        </div>
        </div>)
}
export default FirstJava