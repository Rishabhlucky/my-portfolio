import Typography from '.././Typography' ;
import PrimaryButton from '../PrimaryButton';
import './style.css';

const OurExperience=()=>{
    return (
        <>
        <div className='Our-Box'>
        <div  className='our-exoerience'>
        <h6>Our Experience</h6>
         <Typography type='H1' className=' text-dark title'>We Have Completed <span className='text-orange'> 150+ Projects </span>   Succesfully
         </Typography>
          
          <Typography type='H6' className=' subtitle text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper.
              <br></br><br></br>
           Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet.</Typography>
           <PrimaryButton>Contact Us</PrimaryButton>

         </div>

       <div className='box'>
        <div>

        <div className='boxes box-no1'><Typography type='H1'>250+</Typography>
       <Typography type='H4'>Global Coustmer</Typography></div>
    
    
    <div className='boxes box-no2'><Typography type='H1'>150+</Typography>
    <Typography type='H4'>Projects Completed</Typography></div>
    </div>

    <div>
    <div className='boxes box-no3'><Typography type='H1'>50+</Typography>
    <Typography type='H4'>Team Member</Typography></div>

    <div className='boxes box-no4'><Typography type='H1'>15+</Typography>
    <Typography type='H4'>Our Company</Typography></div>
    </div>
    </div>
    </div>
    </>
    )
}
export default OurExperience;