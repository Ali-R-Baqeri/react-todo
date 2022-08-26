import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = ()=>{
    return(
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/" exact>Today</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/work">Work</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/groceries">Groceries</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/important">Important</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default MainNavigation;