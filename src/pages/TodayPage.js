import { useContext } from "react";
import taskContect from "../store/task-context";
import MainContent from "../components/main/MainContent";

const TodayPage = ()=>{
    const ctx = useContext(taskContect);
    return(
        <MainContent page="today" data={ctx.todayTasks}/>
    );
};

export default TodayPage;