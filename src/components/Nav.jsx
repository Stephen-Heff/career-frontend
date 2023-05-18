import {NavLink} from "react-router-dom";

export default function Nav() {
  return (
    <nav id="main-navigation">
      <ul class="menu-flex">
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/career">Careers</NavLink>
        </li>
      </ul>
    </nav>




  );
}