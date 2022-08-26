
import MainHeader from "./MainHeader";
import Tasks from "./Tasks";

const MainContent = (props)=>{
    return(
        <main>
            <MainHeader page={props.page}/>
            <Tasks page={props.page} data={props.data}/>
        </main>
    );
}

export default MainContent;