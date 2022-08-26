import { createContext } from "react";

const taskContect = createContext({
    alarm: false,
    todayTasks:[],
    workTasks:[],
    groceriesTasks:[],
    importantTasks:[],
    addTask(task, date,id){},
    removeTask(id){},
    moveToImportant(id){},
    doneTask(id){}
});

export default taskContect;