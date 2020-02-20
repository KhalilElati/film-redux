import {Add,Remove, searchInput,Rating,Edit} from '../actions/actionType'

const initState=[
    {title:'Inception-2010',rate:5,img:'https://is2-ssl.mzstatic.com/image/thumb/Video20/v4/fe/dc/f0/fedcf039-7cc9-89b1-b992-00b0d47a229e/pr_source.lsr/268x0w.png',id:1},
    {title:'Shawshank Redemption-1994',rate:5,img:'https://traditiononline.org/wp-content/uploads/2019/11/13-Best-Shawshank.jpg',id:2},
    {title:'Blade Runner-2017',rate:4,img:'https://media.senscritique.com/media/000018750316/source_big/Blade_Runner_2049.jpg',id:3}
    ]
    let film=[
        {title:'Inception-2010',rate:5,img:'https://is2-ssl.mzstatic.com/image/thumb/Video20/v4/fe/dc/f0/fedcf039-7cc9-89b1-b992-00b0d47a229e/pr_source.lsr/268x0w.png',id:1},
        {title:'Shawshank Redemption-1994',rate:5,img:'https://traditiononline.org/wp-content/uploads/2019/11/13-Best-Shawshank.jpg',id:2},
        {title:'Blade Runner-2017',rate:4,img:'https://media.senscritique.com/media/000018750316/source_big/Blade_Runner_2049.jpg',id:3}
        ]
    
   

export const taskReducer=(state=initState,action)=>{
    switch(action.type){
        case Add :
            film=[...film,{title:action.payload1,rate:action.payload2,img:action.payload3}]
            return [...state,{title:action.payload1,rate:action.payload2,img:action.payload3,id:Date.now()}]
     
        case Remove:
            return state.filter((el,i)=>el.id!==action.payload)   
        case searchInput:
            return state= film.filter((el,i)=>el.title.indexOf(action.payload)>-1
            )    
        case Rating :
            return state=film.filter((el,i)=>el.rate>=action.payload)
        case Edit: 
            return state.map(el=> (el.id==action.payload1)? {...el,title:action.payload2.titleInput,rate:action.payload2.rateInput,img:action.payload2.imgInput} :el)

        


        default:return state
    }
}
