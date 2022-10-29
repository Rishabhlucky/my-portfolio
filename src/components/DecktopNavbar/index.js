import Typography from "../Typography";
import './style.css'
import { Link } from "react-router-dom";

const DesktopNavbar=()=>{
    return (
        <nav className='app-desktop-nav'>
            <ul>
                <li>
                    <Typography type='h5' className='menu-font text-black'><Link to="/">Home</Link></Typography>
                </li>
                <li>
                    <Typography type='h5' className='menu-font text-black'><Link to='aboutus'>About us</Link></Typography>
                </li>  
                <li>
                    <Typography type='h5' className='menu-font text-black'><Link to='ourwork'>our work</Link></Typography>
                </li>
                <li>
                    <Typography Type='h5' className='menu-font text-black'><Link to='clients'>Clients</Link></Typography>
                    <Typography type='h5' classnNam='menu-font text-black'><Link to='ourblog'>Our Block</Link></Typography>
                </li>
                <li>
                    <Typography type='h5' className='menu-font text-black'><Link to='contactus'>contact us</Link></Typography>
                </li>
                <li>
                    <Typography type='h5' className='menu-font text-black'><Link to='signup'>Signup</Link></Typography>
                </li>
                <li>
                    <Typography type='h5' className='menu-font text-black'><Link to='login'>Login</Link></Typography>
                </li>
                
            </ul>
            
        </nav>
    )
}

   export default DesktopNavbar;