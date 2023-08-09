import {useState} from 'react'
import '../styles/navbar.css'
const Navbar = () =>{
    const [click,setclick] = useState(false)
    const handleclick = () =>{
      setclick(!click);
      console.log(click);
     
    }
    return(<div className={(click) ?  "navbar-wrapper" :"navbar-wrapper-change" } >
    <div onClick={handleclick} className='navbar-back-btn'></div>

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
