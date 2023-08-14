import '../styles/topics.css'
const Functions = () =>{
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

    return(<div className='map'>
    <div className="topics-logo">Functions</div>
    <div className='topics-body'>
        <div className='topics-body-topics'>
            <div className='topic-point-left'>1
            
            <div className='topic-jist-left'>{q1}</div>
            </div>
            <div className='topic-point-right'>2
            
            <div className='topic-jist-right'>{q2}</div></div>
        </div>
        <div className='topics-body-topics'>
        <div className='topic-point-left'>3
        <div className='topic-jist-left'>{q3}</div>
        </div>
            <div className='topic-point-right'>4
            <div className='topic-jist-right'>{q4}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div className='topic-point-left'>5
        <div className='topic-jist-left'>{q5}</div>
        </div>
            <div className='topic-point-right'>6
            
            <div className='topic-jist-right'>{q6}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div className='topic-point-left'>7
        <div className='topic-jist-left'>{q7}</div>
        </div>
            <div className='topic-point-right'>8
            <div className='topic-jist-right'>{q8}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div className='topic-point-left'>9
        <div className='topic-jist-left'>{q9}</div>
        </div>
            <div className='topic-point-right'>10
            <div className='topic-jist-right'>{q10}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div className='topic-point-left'>11
        <div className='topic-jist-left'>{q11}</div>
        </div>
            <div className='topic-point-right'>12
            <div className='topic-jist-right'>{q12}</div>
            </div>
        </div>
        <div className='topics-body-topics'>
        <div className='topic-point-left'>13
        <div className='topic-jist-left'>{q13}</div>
        </div>
           
        </div>
        

    </div>
    </div>)
}
export default Functions