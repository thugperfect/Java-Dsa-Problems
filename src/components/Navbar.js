import {useState} from 'react'
import '../styles/navbar.css'
import back from '../images/icon_672013_edited.png'
import Topbar from './Topbar'

import FirstJava from "../topics/FirstJava"
import Functions from "../topics/Functions"
import ConditionalsAndLoops from "../topics/ConditionalsAndLoops"
import Arrays from "../topics/Arrays"
import Searching from "../topics/Searching"
import Arrays2 from "../topics/Arrays2"


const Navbar = ({onTopicChange}) =>{
    const [click,setclick] = useState(false)
    const handleclick = () =>{
      setclick(!click);
      console.log(click);
     
    }

    const handleClick = (newTopicComponent) => {
      onTopicChange(newTopicComponent);
    };
    return(
    <div onClick={handleclick} className={(click)?'navbar-main':""}>
 <div className={(click) ? "navbar-wrapper-change": " navbar-wrapper" } >


<div onClick={handleclick} className={(click) ? 'navbar-back-btn left':'navbar-back-btn ' }>
  <img src={back} alt="none"/>
</div>

<div className={(click) ? 'nav-btns':"hide" }>
<div onClick={() =>handleClick(<FirstJava/>)} className='nav-btn' id="first-java">First Java</div>
  <div onClick={() =>handleClick(<ConditionalsAndLoops/>)} className='nav-btn'>Conditionals and Loops</div>
  <div onClick={() =>handleClick(<Functions/>)} className='nav-btn'>Functions</div>
  <div onClick={() =>handleClick(<Arrays/>)} className='nav-btn'>Arrays</div>
  <div onClick={() =>handleClick(<Arrays2/>)} className='nav-btn'>Arrays 2</div>
  <div onClick={() =>handleClick(<Searching/>)} className='nav-btn'>Searching</div>
  <div className='nav-btn'>Sorting</div>
  <div className='nav-btn'>Strings</div>
  <div className='nav-btn'>Patterns</div>
  <div className='nav-btn'>Recursion</div>
  <div className='nav-btn'>Bitwise</div>
  <div className='nav-btn'>Math</div>
  <div className='nav-btn'>Complexities</div>
  <div className='nav-btn'>Oop</div>
  <div className='nav-btn'>Linked List</div>
  <div className='nav-btn'>Stack and Queue</div>
  <div className='nav-btn'>Trees</div>
  
</div>
</div>
    </div>
   )
}


export default Navbar
