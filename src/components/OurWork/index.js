import AppImage from "../AppImage";
import Typography from "../Typography";
import './style.css';



const OurWork=()=>{
    return(
        <div className="ourwork">
          <h6 className="heading6 h5">Our Work </h6>
           <Typography type='H1' className=" text-dark ourwork-title">We Have Some 
               <span className=" text-orange"> Designed & Development </span> Projects
           </Typography>


         <div className="ourwork-img">
          <div>
          <AppImage 
            src={`${process.env.PUBLIC_URL}/assets/images/work.jpg`} alt='logo' clssName='img'></AppImage></div>
            <div>
          <AppImage 
            src={`${process.env.PUBLIC_URL}/assets/images/Image (4).jpg`} alt='logo' clssName='img'></AppImage></div>
            <div>
            <AppImage 
            src={`${process.env.PUBLIC_URL}/assets/images/Image3.jpg`} alt='logo' clssName='img'></AppImage></div>
            <div>
            <AppImage 
            src={`${process.env.PUBLIC_URL}/assets/images/Image (3).jpg`} alt='logopng' clssName='img'></AppImage></div>
            <div>
            <AppImage 
            src={`${process.env.PUBLIC_URL}/assets/images/Image (5).jpg`} alt='logo5' clssName='img'></AppImage></div>
            <div>
            <AppImage 
            src={`${process.env.PUBLIC_URL}/assets/images/Image (6).jpg`} alt='logo' clssName='img'></AppImage></div>
        </div>
        </div>
    )
}
export default OurWork;