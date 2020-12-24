import {ADD_ITEM,DELETE_ITEM,EDIT_ITEM } from "./actionTypes";
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
    case EDIT_ITEM :{
        console.log(state.item_list.map(item =>
            item.id === action.id ?
            { ...item, task:action.task  } :
              item
          ))
        return {...state,
            item_list:state.item_list.map(item =>
            item.id === action.id ?
              { ...item, task:action.task  } :
              item
          )
        }
    }
    default:
        return state;
}
};  