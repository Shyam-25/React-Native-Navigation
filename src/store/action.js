import { ADD_TODO,DELETE_TODO } from './actionTypes';

let nextToDoID = 0;
export const addTodo = task => ({
    type: ADD_TODO,
    payload:{
        id: ++nextToDoID,
        task
    }
});

export const deleteToDo = id => ({
    type: DELETE_TODO,
    payload:{
        id
    }
});