import AppImaage from '../AppImage';
import './style.css'
import Typography from '../Typography';
import PrimaryButton from '../PrimaryButton';
import PosterSocialLinks from '../PosterSocialLinks';


 const Poster=()=>{
    return (
        <section className='poster-section bg-orange-v2'>
        <div className='poster-image'>
          <AppImaage src={`${process.env.PUBLIC_URL}/assets/images/image.jpg`} alt='logo' className='poster-image-tag'/>
          </div>
          
        <div className='poster-text'>
          <Typography type="H1" className=' text-dark poster-title'>
            We are The Best <span  className='text-orange'>Digitel Agency</span>&nbsp;for business
          </Typography>
          <Typography type="H4" className=' text-gray poster-subtitle'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. .
          </Typography>


          <PrimaryButton>Contact Us</PrimaryButton>
          </div>
          <PosterSocialLinks className='poster-social-icons'/>
        



        </section>
    )
 }
 export default Poster;