import IconButton from '../IconButton';
const PosterSocialLinks=(props)=>{
    return (
        <div className={props.className}>
            <IconButton 
            src={`${process.env.PUBLIC_URL}/assets/svgs/facebook-fill.svg`} />
        
        <IconButton 
            src={`${process.env.PUBLIC_URL}/assets/svgs/instagram-fill.svg`} className='bg-white'/>
        <IconButton 
            src={`${process.env.PUBLIC_URL}/assets/svgs/Vector.svg`} className='bg-white'/>

        <IconButton 
            src={`${process.env.PUBLIC_URL}/assets/svgs/skype-fill.svg`} className='bg-white'/>  
        </div>
    )
}

export default PosterSocialLinks;