import { useContext } from "react";
import taskContect from "../store/task-context";
import MainContent from "../components/main/MainContent";

const WorkPage = ()=>{
    const ctx = useContext(taskContect);
    return(
        <MainContent page="work" data={ctx.workTasks}/>
    );
};

export default WorkPage;