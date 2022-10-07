import { component$ } from "@builder.io/qwik";
import Todo from '~/models/Todo';

export const Card = component$((props:{todo : Todo}) => {
    const todo = props.todo;

    const changeTitle = () => {
        console.log("Hello");
    }

    return (
        <>
            <div>
                <div>{todo.title}</div>
                <div>{todo.description}</div>
                <div>Created By : {todo.createdBy}</div>
                <div>Completed : <input type="checkbox" disabled={true} checked={todo.completed}></input></div>
            </div>
            <button onClick$={changeTitle}>Change</button>
        </>
    )
});