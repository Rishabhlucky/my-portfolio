import { USER_DATA,getStorageData } from "../../Services/Storage"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

const ProtectedRouter =(props)=>{
    const naviagte=useNavigate();
    useEffect(()=>{
        const user=getStorageData(USER_DATA);
        if(props.isLogin){
            if(!!user){
                naviagte('/')
            }
        }else{
            if(!user){
                naviagte('/login')
            }
        }
        
    })
    
    return props.children

    
}

export default ProtectedRouter