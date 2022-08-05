import Typography from "../Typography";
import './style.css'

const DesktopNavbar=()=>{
    return (
        <nav className='app-desktop-nav'>
            <ul>
                <li>
                    <Typography type='h5' className='menu-font text-black'>Home</Typography>
                </li>
                <li>
                    <Typography type='h5' className='menu-font text-black'>About us</Typography>
                </li>
                <li>
                    <Typography type='h5' className='menu-font text-black'>our work</Typography>
                </li>
                <li>
                    <Typography Type='h5' className='menu-font text-black'>Clients</Typography>
                </li>
                <li>
                    <Typography type='h5' classnNam='menu-font text-black'>Our Block</Typography>
                </li>
                <li>
                    <Typography type='h5' className='menu-font text-black'>contact us</Typography>
                </li>
                
            </ul>
        </nav>
    )
}

   export default DesktopNavbar;