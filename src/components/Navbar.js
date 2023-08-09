import {useState} from 'react'
import '../styles/navbar.css'
import back from '../images/icon_672013_edited.png'
const Navbar = () =>{
    const [click,setclick] = useState(false)
    const handleclick = () =>{
      setclick(!click);
      console.log(click);
     
    }
    return(
    <div className={(click)?'navbar-main':""}>
 <div className={(click) ? "navbar-wrapper-change": "navbar-wrapper" } >


<div onClick={handleclick} className={(click) ? 'navbar-back-btn left':'navbar-back-btn ' }>
  <img src={back} alt="none"/>
</div>

<div className={(click) ? 'nav-btns':"hide" }>
<div className='nav-btn'>vhjgvghcj</div>
  <div className='nav-btn'>vhjgvghcj</div>
  <div className='nav-btn'>vhjgvghcj</div>
  <div className='nav-btn'>vhjgvghcj</div>
  <div className='nav-btn'>vhjgvghcj</div>
  <div className='nav-btn'>vhjgvghcj</div>
  <div className='nav-btn'>vhjgvghcj</div>
  <div className='nav-btn'>vhjgvghcj</div>
  <div className='nav-btn'>vhjgvghcj</div>
  <div className='nav-btn'>vhjgvghcj</div>
  <div className='nav-btn'>vhjgvghcj</div>
  <div className='nav-btn'>vhjgvghcj</div>
  <div className='nav-btn'>vhjgvghcj</div>
  <div className='nav-btn'>vhjgvghcj</div>
  <div className='nav-btn'>vhjgvghcj</div>
  <div className='nav-btn'>vhjgvghcj</div>
  <div className='nav-btn'>vhjgvghcj</div>
  <div className='nav-btn'>vhjgvghcj</div>
  <div className='nav-btn'>vhjgvghcj</div>
  <div className='nav-btn'>vhjgvghcj</div>
</div>
</div>
    </div>
   )
}


export default Navbar
