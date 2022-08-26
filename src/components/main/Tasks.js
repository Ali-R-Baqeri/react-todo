import { useContext, useRef, useState } from "react";
import taskContect from "../../store/task-context";
import classes from "./Tasks.module.css";

const Tasks = (props)=>{
    const [taskValue, setTaskValue] = useState("");
    const [inputIsValid, setInputIsValid] = useState(true);
    const ctx = useContext(taskContect);
    const taskRef = useRef();
    const dateRef = useRef();

    const formSubmitionHandler = (event)=>{
        event.preventDefault();
        if(taskValue.trim().length < 1){
            setInputIsValid(false);
            return;
        }
        let addId;
        switch(props.page){
            case "today":
                addId = `t${ctx.todayTasks.length +1}`
            break;
            case "work":
                addId = `w${ctx.workTasks.length +1}`
            break;
            case "groceries":
                addId = `g${ctx.groceriesTasks.length +1}`
            break;
        }
        ctx.addTask(taskRef.current.value, dateRef.current.value,addId);
        setTaskValue("");
    };

    const toImportantHandler = (event)=>{
        event.stopPropagation();
        const clickedLi = event.target.closest("li");     
        ctx.moveToImportant(clickedLi.id);
    };

    const taskDoneHandler = (event)=>{
        const doneId = event.target.closest("li").id;
        ctx.doneTask(doneId);
    };

    const removeHandler = (event)=>{
        event.stopPropagation();
        const removedLiId = event.target.closest("li").id;
        ctx.removeTask(removedLiId);
    };

    const inputValidationHandler = (event)=>{
        setTaskValue(event.target.value);
        setInputIsValid(true);
    };
    let formClasses = inputIsValid ? "add" : "add invalid";
    return(
        <div className={classes.container}>
            <h5 className={classes.total}> total tasks : {props.data.length} </h5>
            
            {props.page !== "important" && <div>
                <h5 className={classes.question}>Thinking of a new task to do? </h5>
                <form onSubmit={formSubmitionHandler} className={formClasses}>
                    <div>
                        <label>Task: </label>
                        <input ref={taskRef} 
                        onChange={inputValidationHandler} 
                        type="text"
                        value={taskValue}/>
                        {!inputIsValid && <p>task must contains at least 1 character !!</p>}
                    </div>

                    <div>
                        <label>Date: </label>
                        <input ref={dateRef} type="date"/>
                    </div>
                    <button type="submit">+Add</button>
                </form>
            </div>}
            <ul>
                {props.data.map(task => 
                <li key={task.id} id={task.id} onClick={taskDoneHandler} className={task.class}>
                    {props.page !== "important" && <button className="ibtn" onClick={toImportantHandler}>Important</button>}
                    <h5>{task.name}</h5>
                    <h5>{task.date}</h5>
                    <button onClick={removeHandler}>Remove</button>
                </li>)}
            </ul>
        </div>
    );
}

export default Tasks;