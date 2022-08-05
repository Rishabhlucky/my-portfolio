import AppImage from "../AppImage";
import Typography from "../Typography";
import './style.css'


const CliensFeedback=()=>{
    return(
        <div className='feedback'>
         <Typography type='H6' >Cliens  Feedback</Typography>

         <Typography type='H1' className=' title text-dark'>Some <span className='text-orange'> Great Words  </span>From Our Clients</Typography>
         <div className='justin'>
           <AppImage src={`${process.env.PUBLIC_URL}/assets/svgs/profile2.svg`} alt='logo' className=' justin-logo' />
           <Typography type='H6' className=' text-gray text-white text1'>Justin Septimus</Typography>
           <Typography type="H6" className=' text-white'> CEO,word yt</Typography>
           <Typography type='H6' className=' text-gray text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
           
         
         </div>

          <div className="couse">
            <AppImage src={`${process.env.PUBLIC_URL}/assets/svgs/profile.svg`} alt='logo' className=' couse-logo' />
            <Typography type='H6' className=' text-gray text-white text1'>Justin Septimus</Typography>
           <Typography type="H6" className=' text-white'> CEO,word yt</Typography>
           <Typography type='H6' className=' text-gray text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          </div>



        </div>
        
        
        
        )
}
export default CliensFeedback;