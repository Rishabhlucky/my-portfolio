import Typography from "../Typography";

import TeamImage from "../TeamImage";
import './style.css'

const TeamMember=()=>{
    return(
        <div className='teammember'>
        <h6 className="h5">Team Member</h6>
        <Typography type='H1' className=' text-dark title'>We Have <span className=' text-orange'> Some Awesome </span> People</Typography>

        <TeamImage />
            
          
        </div>
    )
}
export default TeamMember;