import "./new.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");



  return (
    <div className='new'>
        <Sidebar />
        <div className="newContainer">
            <Navbar />
            <div className="top">
            <h1>Add New User</h1>
            </div>
            <div className="bottom">
           <div className="left">left</div>
          
          
           
           <div className="right">
               <form>
                   <div className="formInput">
                       <label htmlFor="file">
                           Image:<DriveFolderUploadOutlinedIcon  className="icon"/></label>
                       <input type="file"  id="file" style={{display:"none"}}/>
                   </div>
                   <div className="formInput">
                       <label>Username</label>
                       <input type="text" placeholder="John_doe" />
                   </div>
                   <div className="formInput">
                       <label>Name and Surname</label>
                       <input type="text" placeholder="John doe" />
                   </div>
                   <div className="formInput">
                       <label>Email</label>
                       <input type="email" placeholder="John_doe@gmail.com" />
                   </div>
                   <div className="formInput">
                       <label>Phone</label>
                       <input type="text" placeholder="+1234 567 89" />
                   </div>
                   <div className="formInput">
                       <label>Password</label>
                       <input type="password"/>
                   </div>
                   <div className="formInput">
                       <label>Address</label>
                       <input type="text" placeholder="Elton St. 216 Newyork" />
                   </div>
                   <div className="formInput">
                       <label>Country</label>
                       <input type="text" placeholder="Usa" />
                   </div>
                   <button>send</button>
               </form>
           </div>
            </div>
            
        </div>
    </div>
  )
}

export default New
