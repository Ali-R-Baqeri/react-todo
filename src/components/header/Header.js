
import classes from "./Header.module.css";

import MainNavigation from "./MainNavigation";

const Header = ()=>{
    return(
        <header className={classes.header}>
            <h1>react-to-do-app</h1>
            <div className={classes.user}>
                <div>AB</div>
                <span>Ali R Baqeri</span>
            </div>
            <MainNavigation/>

            <div className={classes.guid}>
                <p>Get Started</p>
                <ul>
                    <li>In a gategorie e.g Today </li>
                    <li>Fill out the add form </li>
                    <li>Click on +Add to add a new task</li>
                    <li>Click on Task for getting done</li>
                    <li>back ground of done task will become darker</li>
                    <li>Click on important to add them to important</li>
                    <li>back ground of important task will change to gold</li>
                    <li>Click on remove to remove them</li>
                    <li>if you remove from important task in initial gategory will looks like other task.</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;