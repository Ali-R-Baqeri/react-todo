import classes from "./MainHeader.module.css";

const MainHeader = (props)=>{
    const todayDay = new Date().getDate();
    const todayMounth = new Date().getMonth();
    const todayYear = new Date().getFullYear();
    return(
        <div className={classes.header}>
            <h3>{props.page}</h3>
            <h4>{`${todayYear}-${todayMounth}-${todayDay}`}</h4>
        </div>
    );
}

export default MainHeader;