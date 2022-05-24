import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import StoreIcon from "@mui/icons-material/Store";
import {Link} from "react-router-dom"

import ExitToAppIcon from "@mui/icons-material/ExitToApp";



import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";


const Sidebar = () => {
  return (
    <div className='sideBar'>
    <div className="top">
        <Link to="/" style={{ textDecoration: "none"}}>
        <span className="logo">Tessrac</span>
        </Link>
    <span className="logo"></span>
    </div>
    <hr />
    <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <li>
                <DashboardIcon  className="icon"/>
                <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <Link to="/users" style={{ textDecoration: "none"}}>
            <li>
                <PersonOutlineOutlinedIcon className="icon"/>
                <span>Users</span>
            </li>
            </Link>
            <li>
            <StoreIcon className="icon" />
                <span>Products</span>
            </li>
            <li>
            <ContactsOutlinedIcon className="icon"/>
                <span>Contacts</span>
            </li>
            
           
           
            
            
            <li>
            <AccountCircleOutlinedIcon className="icon"/>
                <span>Profile</span>
            </li>
            <li>
            <ExitToAppIcon className="icon"/>
                <span>LogOut</span>
            </li>
            
            
            

        </ul>
    </div>
    <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        
    </div>
 </div>
  )
}

export default Sidebar