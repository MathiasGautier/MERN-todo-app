import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar(props) {
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(
    AuthContext
  );

  const onClickLogoutHandled =()=>{
      AuthService.logout().then(data=>{
          if(data.success){
              setUser(data.user);
              setIsAuthenticated(false);
          }
      });
  }

  const unauthenticatedNavBar = () => {
    return (
      <>
        <Link to="/">
          <li className="nav-itel nav-link">Home</li>
        </Link>
        <Link to="/login">
          <li className="nav-itel nav-link">Login</li>
        </Link>
        <Link to="/register">
          <li className="nav-itel nav-link">Register</li>
        </Link>
      </>
    );
  };

  const authenticatedNavBar = () => {
    return (
      <>
        <Link to="/">
          <li className="nav-itel nav-link">Home</li>
        </Link>
        <Link to="/todos">
          <li className="nav-itel nav-link">Todos</li>
        </Link>
        {user.role === "admin" ? (
          <Link to="/admin">
            <li className="nav-itel nav-link">Admin</li>
          </Link>
        ) : null}
        <button
          type="button"
          className="btn btn-link nav-item nav-link"
          onClick={onClickLogoutHandled}
        >
          Logout
        </button>
      </>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <div className="navbar-brand" href="#">
          HOME
        </div>
      </Link>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
