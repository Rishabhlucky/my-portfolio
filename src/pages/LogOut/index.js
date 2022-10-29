import { clearStorageData,removeStorageData,USER_DATA } from "../../Services/Storage"
import { useNavigate } from "react-router-dom"

const LogOut=()=>{
    const navigate=useNavigate();
  const LogOut=()=>{
    removeStorageData(USER_DATA);
    navigate('/login');

    
  }
    return(
        <div onClick={LogOut}>
            <button type='botton'>Logout</button>

        </div>
    )
}
export default LogOut;