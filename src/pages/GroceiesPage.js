import { useContext } from "react";
import taskContect from "../store/task-context";
import MainContent from "../components/main/MainContent";

const GroceriesPage = ()=>{
    const ctx = useContext(taskContect);
    return(
        <MainContent page="groceries" data={ctx.groceriesTasks}/>
    );
};

export default GroceriesPage;