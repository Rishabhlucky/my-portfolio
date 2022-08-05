import AppImage from "../AppImage";
import './style.css'

const IconButton=(props)=>{
    const getClassNames=()=>
        `app-icon-button ${props.className ? props.className:''}`
        return (
            <button className={getClassNames()} type='button' onClick={props.onClick}>
            <AppImage src={props.src} alt={props.alt}/>
            </button>
        )
    
}
export default IconButton;