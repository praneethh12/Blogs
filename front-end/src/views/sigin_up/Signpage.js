import Auth from "./Auth"
import bgimg from '../../static/signbg2.jpg'
import {React,useNavigate} from 'react';
function Signpage() {
    document.body.style.backgroundImage=`url(${bgimg})`;
    document.body.style.backgroundSize = "100% 100%";
    // const navigate = useNavigate();
    // navigate('profile');
  return (
    <div>
      
    <Auth></Auth>
    </div>
  )
}

export default Signpage