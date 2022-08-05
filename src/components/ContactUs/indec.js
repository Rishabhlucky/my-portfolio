import Typography from '../Typography'
import ContactBox from '../ContactBox';
const ContactUs =()=>{
    return(
        <div className="contactUs">
         <Typography type='H6' >Contact Us</Typography>
         <Typography type='H1' className=' text-dark'>Feel <span className='text-orange'>Free to Contact </span> With Us</Typography>

          <ContactBox img={`${process.env.PUBLIC_URL}/assets/svgs/Icon.svg`}
                       content1="he " content2="heelo" content3="gi" content4="gr"/>
        </div>
    )
}

export default ContactUs;