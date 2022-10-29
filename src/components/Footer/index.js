import AppImage from "../AppImage";
import Typography from "../Typography";
import PosterSocialLinks from "../PosterSocialLinks";
import './style.css'

const Footer=()=>{
    return (
        <div className="footer">
         <div>  
        <AppImage src={`${process.env.PUBLIC_URL}/assets/svgs/logo.svg`} alt='logo' />
        <Typography type="H6" className=" footer-lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, cursus egestas
         etiam posuere vitae cursus consectetur eu. Cursus vitae porttitor libero est posuere.</Typography>
        <br />
       <PosterSocialLinks className='socialicon'/>
       </div> 
       <div>
       <Typography type="H3">Company</Typography>
       <Typography type="h6">
        <ul>
            <li>About us</li>
            <li>Our work</li>
            <li>Client</li>
            <li>Our blog</li>
            <li>Contact us</li>
        </ul>
       </Typography>
       </div>
       <div>
       <Typography type="H3">Services</Typography>
       <Typography type="h6">
        <ul>
            <li>Graphic Design</li>
            <li>UX/UI design</li>
            <li>Web developement</li>
            <li>App Development</li>
            <li>Web Hosting</li>
        </ul>
       </Typography>
       </div>
       <div>
       <Typography type="H3">NewsLetter</Typography>
       <Typography type='H6'>Lorem ipsum dolor sit amet, consectetur 
         adipiscing elit. Arcu feugiat in mollis augue vel aliquam. Ut faucibus elit, libero varius. </Typography>
        <div className=" colorbox">
        <Typography type='H6' className=' text' >Copyright 2021. All Right Reserved
          Ojjomedia</Typography>
          </div>
        </div>
        </div>
    )
}
export default Footer;