import { useContext } from "react";
import taskContect from "../store/task-context";
import MainContent from "../components/main/MainContent";

const ImportantPage = ()=>{
    const ctx = useContext(taskContect);
    return(
        <MainContent page="important" data={ctx.importantTasks}/>
    );
};

export default ImportantPage;