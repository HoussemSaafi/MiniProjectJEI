import logo from './logow.png'
import './NavBar.css'
import profile from './pp.png'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src={logo} alt='ollert logo'></img>
            <h2>Ollert</h2>
            <div className='pageDisp'>
                <h3>Home</h3>
            </div>
            <div className="searchBar">
                <input type="text" placeholder="Search for Something..."/>
            </div>
            <div className='pp'>
            <img src={profile} alt='profile'></img>
            </div>
            

        </nav>
     );
}
 
export default Navbar;