import {useState} from 'react'
import '../styles/navbar.css'
import back from '../images/icon_672013_edited.png'
const Navbar = () =>{
    const [click,setclick] = useState(false)
    const handleclick = () =>{
      setclick(!click);
      console.log(click);
     
    }
    return(<div className={(click) ?  "navbar-wrapper" :"navbar-wrapper-change" } >
    <div onClick={handleclick} className={(click) ? 'navbar-back-btn ' :'navbar-back-btn left'}>
      <img src={back} alt="none"/>
    </div>

    <div className={(click) ? "hide" :'nav-btns'}>
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
    </div>)
}


export default Navbar
