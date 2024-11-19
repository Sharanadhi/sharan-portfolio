import './Navbar.scss'

function Navbar() {
  return (
  <nav className='navbar'> 
    <div className="navbar__logo"> 
      <a href="#">Sharan Athiyadath</a> 
    </div> 
    <ul className="navbar__menu"> 
      <li><a href="#" className='active'>Home</a></li> 
      <li><a href="#about">About</a></li> 
      <li><a href="#">Projects</a></li> 
      <li><a href="#">Contact</a></li> 
    </ul> 
  </nav>);
}

export default Navbar;