import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FilterListOffOutlinedIcon from '@mui/icons-material/FilterListOffOutlined';
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchOutlinedIcon />
        </div>
        <div className="items">
        <div className="item">
       < LanguageOutlinedIcon className="icon"/>
          English
        </div>
        
        <div className="item">
        <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            /><br />
            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><Link to="/users/new"><a class="dropdown-item">Add Profile</a></Link></li>
    <li><a class="dropdown-item"><Link to="/login">Logout</Link></a></li>
  </ul>
</div><br />

            <Link to="/login">
              <button className="btn btn-outline-success me-2">
             <i className="fa fa-user" />Sign In
              </button>
              </Link>
             
              
        </div>

        </div>

      </div>
    
    </div>
  )
}

export default Navbar
