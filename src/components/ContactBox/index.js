import Typography from "../Typography";
import AppImage from '../AppImage'

import './style.css'


const ContactBox=(props)=>{
   

    return (
      <div className ="divcontact">
        <div className ="contactbox">
          <div className="contact-img">
         <AppImage src={props.img}></AppImage>
         </div>  
         <div>
         <Typography type="H1" className=" text-orange title">{props.content1}</Typography>
        
         <Typography type="H1" className=" title">{props.content2}</Typography>
         </div>
         </div>
        
         <Typography type="H5" className=" contact-text">{props.content3}</Typography>
         <Typography type="H5" className=" contact-text">{props.content4}</Typography>
         </div> 
        )
    }
export default ContactBox;