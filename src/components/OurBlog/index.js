import AppImage from "../AppImage";
import Typography from "../Typography";
import './style.css';

const OurBlog=()=>{
    return(
        <div className='our-blog'>
       <Typography type='H6 blog'>Our Blog</Typography>
       <Typography type='H1' className=' test-dark title'> Our Latest <span className=' text-orange'>Blogs Will Keep </span> Everyone Updated</Typography>
      
      <div className="BOX">
        <div>
       <div className='container-blog'>
       <div className='blog-div1'>
             <div className='blog-div-text1'>
                <Typography type='H6' className=' text-orange name'>Graphic Design</Typography>
                <Typography type='H6'className=' porofession' >35 Stellar Graphic Design Blogs to Keep You Educated and Inspired </Typography>
              </div>
            <div className='blog-div-img1'>
                <AppImage src={`${process.env.PUBLIC_URL}/assets/svgs/Image.svg`} alt='logo'  />

            </div>
            </div>
            <div className='blog-div1'>
            <div className='blog-div-img'>
                <AppImage src={`${process.env.PUBLIC_URL}/assets/svgs/Profile (2).svg`} alt='logo'  />

            </div>
            <div className='blog-div-text2'>
                <Typography type='H6' className=' name'>Cristofer Westervelt</Typography>
                <Typography type='H6' className=' name2'>January 25, 2021t * 5 min Read</Typography>
            </div>
          </div>
         </div>
        </div>
        <div> 
       <div className='container-blog'>
       <div className='blog-div1'>
            
            <div className='blog-div-text1'>
                <Typography type='H6' className=' text-orange name'>Technology</Typography>
                <Typography type='H6'className=' porofession' >Ridiculously powerful 2021 iPad Pro may drop this month </Typography>



            </div>
            <div className='blog-div-img1'>
                <AppImage src={`${process.env.PUBLIC_URL}/assets/svgs/Image.svg`} alt='logo'  />

            </div>
            </div>


         <div className='blog-div1'>
            <div className='blog-div-img'>
                <AppImage src={`${process.env.PUBLIC_URL}/assets/svgs/Profile (2).svg`} alt='logo'  />

            </div>
            <div className='blog-div-text2'>
                <Typography type='H6' className=' name'>Haylie Mango </Typography>
                <Typography type='H6' className=' name2'>January 25, 2021t  . 5 min Read</Typography>
            </div>
          </div>
         </div>
        </div>
        </div>
        </div>
    )
}
export default OurBlog;