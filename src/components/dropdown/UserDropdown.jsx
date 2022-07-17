
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, NavLink, useNavigate } from "react-router-dom";

const UserDropdown = (props)=> {
    
  const navigate = useNavigate();
  const handleSelect=(e)=>{
    console.log(e);
    if(e == "logout"){
        localStorage.clear();
        navigate("/");
        window.location.reload(true);
    }
    
  }
  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      {props.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
        <Dropdown.Item eventKey="logout" >Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserDropdown;