import Typography from "../Typography";
import AppImage from '../AppImage'
import './style.css'


const ContactBox=(props)=>{
   

    return (
      <div className ="divcontact">
        <div className ="contactbox">
          <div>
         <AppImage src={props.img}></AppImage>
         </div>  
         <div>
         <Typography type="H1" classname=" text-orange">{props.content1}</Typography>
        
         <Typography type="H1">{props.content2}</Typography>
         </div>
         </div>
         <br/>
         <Typography type="H5">{props.content3}</Typography>
         <Typography type="H5">{props.content4}</Typography>
         </div> 
        )
    }
export default ContactBox;