import AppImage from "../AppImage";
import PosterSocialLinks from "../PosterSocialLinks";
import Typography from "../Typography";
import './style.css'


const TeamImage=()=>{
 
    return (
        
        <div className='img-logo'> 
          <div className='img1'>
           <AppImage 
             src={`${process.env.PUBLIC_URL}/assets/images/first.jpg`} alt='logo'   ></AppImage>
            <PosterSocialLinks className='logo' />
          
            <Typography type='H5' >Gustavo Herwitz</Typography>
            <Typography type='H6' >UI/UX Designer</Typography>
          
           </div>
            
           <div className='img2'>
            <AppImage
           src={`${process.env.PUBLIC_URL}/assets/images/Team1.jpg`} alt='logo'   ></AppImage>
           <Typography type='H5' className=' name'>Phillip Curtis</Typography>
            <Typography type='H6' >Graphic Designer</Typography>

         </div>
         <div className='img3'>
        <AppImage
        src={`${process.env.PUBLIC_URL}/assets/images/team2.jpg`} alt='logo'   ></AppImage>
         <Typography type='H5' className=' name'>Talan Torff</Typography>
         <Typography type='H6' >Web Developer</Typography>

        </div>
        </div>
    )
}


export default TeamImage;

