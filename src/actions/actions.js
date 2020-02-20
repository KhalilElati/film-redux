import {Rating,Add,Remove,searchInput,Edit} from './actionType'


// export const searchTask=(task)=>{
//     return {type:Search,payload:task}
// }
export const ratingTask=(task)=>{
    return {type:Rating,payload:task}
}
export const add=(task1,task2,task3)=>{
    return {type:Add,payload1:task1,payload2:task2,payload3:task3}
}
export const remove=(task)=>{
    return {type:Remove,payload:task}
}
export const searchI=(task)=>{
    return {type:searchInput,payload:task}
}
export const Rate=(task)=>{
    return {type:Rating,payload:task}
}
export const edit=(task1,task2)=>{
    return {type:Edit,payload1:task1,payload2:task2}
}