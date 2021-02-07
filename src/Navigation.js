import { NavLink } from "react-router-dom";

/** Navigation component to show different dog names
 *
 * 
 * App -> Navigation
 */

function Navigation() {

  // const selectElement = (s) => document.querySelector(s);

  // //open the menu on click
  // selectElement('.open').addEventListener('click', () => {
  //   selectElement('.nav-list').classList.add('active');
  // });

  // //close
  // selectElement('.close').addEventListener('click', () => {
  //   selectElement('.nav-list').classList.remove('active');
  // });

  return (
    <nav className="Navigation">
      <NavLink exact to="/" className="nav-logo">CLAIRE CASEY</NavLink>
      <div className="menu-icons open">
        <i className="icon ion-md-menu"></i>
      </div>
      <ul className=" nav-list">
        <div className="menu-icons close">
          <i className="icon ion-md-close"></i>
        </div>
        <li className="nav-item">
          <NavLink exact to="/about" className="nav-link">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/projects" className="nav-link">Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/connect" className="nav-link">Connect</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;