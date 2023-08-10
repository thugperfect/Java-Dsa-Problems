import {useState} from 'react'
import '../styles/navbar.css'
import back from '../images/icon_672013_edited.png'
import Topbar from './Topbar'
const Navbar = () =>{
    const [click,setclick] = useState(false)
    const handleclick = () =>{
      setclick(!click);
      console.log(click);
     
    }
    return(
    <div onClick={handleclick} className={(click)?'navbar-main':""}>
 <div className={(click) ? "navbar-wrapper-change": " navbar-wrapper" } >


<div onClick={handleclick} className={(click) ? 'navbar-back-btn left':'navbar-back-btn ' }>
  <img src={back} alt="none"/>
</div>

<div className={(click) ? 'nav-btns':"hide" }>
<div className='nav-btn'>First Java</div>
  <div className='nav-btn'>Conditionals and Loops</div>
  <div className='nav-btn'>Functions</div>
  <div className='nav-btn'>Arrays</div>
  <div className='nav-btn'>Searching</div>
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
