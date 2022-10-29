import Typography from '../Typography'
import ContactBox from '../ContactBox';
import './style.css';
import AppImage from '../AppImage';
import PrimaryButton from '../PrimaryButton';
const ContactUs =()=>{
    return(
        <div className="contactUs">
            
         <Typography type='H6'className=' center' >Contact Us</Typography>
         <Typography type='H1' className=' text-dark title center'>Feel <span className='text-orange'>Free to Contact </span> With Us</Typography>
          <div className='icon-div'>
            <div >
                <ContactBox img={`${process.env.PUBLIC_URL}/assets/svgs/Icon.svg`}
                       content1="Drop line" content2="Mail US" content3="mrishabh0299@gmail.com" 
                       content4="rm7274505@gmail.com"/>
              </div>
              <div >        
               <ContactBox img={`${process.env.PUBLIC_URL}/assets/svgs/Icon@2x.svg`}
                       content1="24/7 service" content2="Call us" content3="+916306389347" 
                       content4="+916306388347"/>
                </div> 
                <div>        
               <ContactBox img={`${process.env.PUBLIC_URL}/assets/svgs/Icon (2).svg`}
                       content1="Location" content2="visit us" content3="Indranagar lucknow (up)" 
                       content4=" chintamani chuak ,Badlapur, Maharastra "/>
                </div>
            </div>
            <div className='center'>
            <AppImage src={`${process.env.PUBLIC_URL}/assets/svgs/callus.svg`} alt='logo' className='contactimg1' /> 
            <AppImage src={`${process.env.PUBLIC_URL}/assets/svgs/arrow.svg`} alt='logo'  className='contactimg2' />
            </div> 

            <form className='form'>
                <Typography type='H1' className=' center'> Send your <span className=' text-orange'> message to us </span></Typography>
                <input type='text' placeholder='Name'></input><br/>
                <input type='email' placeholder='E-mail'></input><br />
                <input type='no' placeholder='Mobile-no'></input><br />
                <input type='text' placeholder='Subject'></input><br />
                <textarea placeholder='Subject' style={{height:"200px" ,width:"400px"}}></textarea><br/>
                <PrimaryButton > Send message</PrimaryButton>
            </form> 
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227822.55035627162!2d80.8024271802209!3d26.84862299412667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1660135617790!5m2!1sen!2sin"  width="600" height="450" ></iframe>
           
            </div> 
            <div className='logos'>
            <AppImage src={`${process.env.PUBLIC_URL}/assets/images/Client Logo.png`} alt='logo' />      
            </div> 
        </div>
    )
}

export default ContactUs;