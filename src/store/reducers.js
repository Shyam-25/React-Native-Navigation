import {ADD_ITEM,DELETE_ITEM } from "./actionTypes";
const initialState={
    app_list:[]
};
export const mainReducer =(state= initialState, action)=>{
switch(action.type){
    case ADD_ITEM :{
        const { id, task } = action.payload
        return{...state,app_list: [...state.app_list, { id , task }]};
    }
    case DELETE_ITEM :{
        const { id }=action.payload
        return{
            ...state,
            app_list: state.app_list.filter((index)=>index.id !=id)
            }
    }
    default:
        return state;
}
};  