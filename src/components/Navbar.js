import {useState} from 'react'

const Navbar = () =>{
    const [click,setclick] = useState(false)
    const handleclick = () =>{
      setclick(!click);
      console.log(click);
     
    }
    return(<div className={(click) ? "navbar-wrapper-change" : "navbar-wrapper"} >
    <div onClick={handleclick} className='navbar-back-btn'></div>
    </div>)
}


export default Navbar
