
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link , Outlet } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../auth/authSlice';
const NavBar  = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    return (
    
    
    <>
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home">Music'A 💃 </Navbar.Brand>
      <Nav className="mx-left">
        {user ?
        <div>
          <button onClick={() => dispatch(removeUser())} >Déconnexion</button>
          <div>
          <Link to={"./add"}>
          <button > Ajouter une musique</button>
          </Link>
          </div>
        </div>
          :
          <div>
            <Link to={"/connexion"}>

              <button onClick={() => dispatch(removeUser())} >Connexion</button>
             </Link>
             
          </div>
        }
      </Nav>
    </Container>
  </Navbar>
        <Outlet/> 
        
        </>
        
        );
}
 
export default NavBar;