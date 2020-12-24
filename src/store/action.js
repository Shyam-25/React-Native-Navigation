import { ADD_ITEM,DELETE_ITEM,EDIT_ITEM } from "./actionTypes";
let nextTodoId=0;

export const addItem = task =>({
type: ADD_ITEM,
payload:{
    id:++nextTodoId,
    task
}
});

export const deleteItem = id =>({
    type: DELETE_ITEM,
    payload:{
        id
    }
    });

export const editItem = (id,task) =>({
    type: EDIT_ITEM,
    id,
    task
});
    