import AppImage from '../AppImage'; 
import PrimaryButton from '../PrimaryButton';
import Typography from '../Typography';
import './style.css';


const AboutUs=()=>{
    
    return(
      <div>
        
     <div className='AboutUs'>
        <div className='AboutUs-image'>
            <AppImage
            src={`${process.env.PUBLIC_URL}/assets/images/image2.png`} alt='logo'  />
        </div>
        <div >
            <h3 >About us</h3>
            <Typography type='H1' className=' text-dark AboutUs-title'>
            We Are<span className='text-orange'> Better For Everyone </span> For Everyone
            </Typography>

            <Typography type='H4' className='text-gray AboutUs-subtitle'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean<br/>

               Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet.
            </Typography>
            <PrimaryButton>Contact-Us</PrimaryButton>
            
            </div>
    
            </div>
            <div className='icons-container bg-whte'>
              <div className='file'>
                <AppImage 
                src={`${process.env.PUBLIC_URL}/assets/svgs/logo.svg`} alt='logo' className='file-icon'/>
                <Typography type='H5' className='text-black file-text'>
                World leader in consulting and finance

                </Typography>
              </div>
              <div className='file'>
                <AppImage 
                src={`${process.env.PUBLIC_URL}/assets/svgs/logo.svg`} alt='logo' className='file-icon'/>
                <Typography type='H5' className='text-black file-text'>
                Trusted and professional advisors for you
                 </Typography>
              </div>
              <div className='file'>
                <AppImage 
                src={`${process.env.PUBLIC_URL}/assets/svgs/logo.svg`} alt='logo' className='file-icon'/>
                <Typography type='H5' className='text-black file-text'>
                Trusted and professional advisors for you


                </Typography>
              </div>
              <div className='file'>
                <AppImage 
                src={`${process.env.PUBLIC_URL}/assets/svgs/logo.svg`} alt='logo' className='file-icon'/>
                <Typography type='H5' className='text-black file-text'>
                Experience to give you a better results


                </Typography>

                
              </div>
             
            </div>

        
            </div>
        )
    }

export default AboutUs;