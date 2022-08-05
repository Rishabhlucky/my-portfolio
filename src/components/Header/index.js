import './style.css'
import AppImage from '../AppImage'
import DecktopNavbar from '../DecktopNavbar'


const Header=()=>{
    return (
        <header className='app-header'>
        <div>
            
            <AppImage
            src={`${process.env.PUBLIC_URL}/assets/svgs/logo.svg`} alt='logo'  />
           
        </div>
        <div >
            <DecktopNavbar />

        </div>


        <div className='lighticon'>
            
            <AppImage
            src={`${process.env.PUBLIC_URL}/assets/svgs/Light.svg`} alt='logo'  />
           
        </div>
        <div className='menuicon'>
            
            <AppImage
            src={`${process.env.PUBLIC_URL}/assets/svgs/Menu.svg`} alt='logo'  />
           
        </div>
       

        </header>
       )
}
export default Header;