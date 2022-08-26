import { useState } from "react";
import taskContect from "./task-context";

const TaskProvider = (props)=> {
    const[today, setToday] = useState([{name: "Fix the car", date: "", id:"t1" , class: "task"}]);
    const[work, setWork] = useState([{name: "visit mr.Smith", date: "2022-08-29", id:"w1", class: "task"}]);
    const[groceries, setGroceries] = useState([]);
    const[important, setImportant] = useState([]);
    
    const itemFounder = (id)=>{
        let itemData;
        let itemCategorie;
        const itemInImportant = important.find(item => item.id === id); 
        switch(id[0]){
            case "t":
                itemData = today.find(item => item.id === id);
                itemCategorie = setToday;
            break;
            case "w":
                itemData = work.find(item => item.id === id);
                itemCategorie = setWork;
            break;
            case "g":
                itemData = groceries.find(item => item.id === id);
                itemCategorie = setGroceries;
            break;
        }
        return [itemData, itemCategorie, itemInImportant];
    };

    const doneClasses = (itemData)=>{
        if(itemData.class.indexOf("done") !== -1){
            itemData.class = itemData.class.replace(" done","");
        }else {
            itemData.class += " done" ;
        }
    };

    const taskContext = {
        todayTasks: today,
        workTasks: work,
        groceriesTasks: groceries,
        importantTasks:important,
        addTask(task, date, id){
            const itemCategorie = itemFounder(id)[1];
            itemCategorie( prev => [...prev, {name: task, date , id, class:"task"}]);
        },
        moveToImportant(id){            
            const itemdata = itemFounder(id)[0]; 
            itemdata.class += " important" ;
            setImportant(prev => 
            [...prev, {name: itemdata.name, date: itemdata.date, id: itemdata.id , class: itemdata.class}]);
        },
        removeTask(id){
            const [itemData, itemCategorie] = itemFounder(id);
            if( itemData.class.indexOf("important") !== -1){
                itemData.class= itemData.class.replace("important", "");
                setImportant( prev => [...prev.filter(item => item.id !== id)]);
                return;
            }
            itemCategorie( prev => [...prev.filter(item => item.id !== id)]);               
        },
        doneTask(id){
            const [itemData, itemCategorie, itemInImportant] = itemFounder(id);
            doneClasses(itemData);
            itemCategorie(prev => [...prev]);

            if(itemInImportant || itemData.class.indexOf("important") !== -1){
                doneClasses(itemInImportant);
                setImportant(prev => [...prev]);
            }    
        }
    };
    return(
        <taskContect.Provider value={taskContext}>{props.children}</taskContect.Provider>
    );
};

export default TaskProvider;