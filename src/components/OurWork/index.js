import AppImage from "../AppImage";
import Typography from "../Typography";
import './style.css'



const OurWork=()=>{
    return(
        <div clssName='ourwork'>
          <h6>Our Work </h6>
          <Typography type='H1' clssName=' text-dark '>We Have Some <span clssName="text-orange"> Designed & Development </span> Projects</Typography>


         <div >
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
            src={`${process.env.PUBLIC_URL}/assets/images/Image (5)jpg`} alt='logo' clssName='img'></AppImage></div>
            <div>
            <AppImage 
            src={`${process.env.PUBLIC_URL}/assets/images/Image (6).jpg`} alt='logo' clssName='img'></AppImage></div>
        </div>
    )
}
export default OurWork;