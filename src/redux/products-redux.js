const initialState = [
    {id : 1 , title : 'Трубопроводная арматура'},
    {id : 2 , title : 'Отдельные соединительне элементы, детали трубопровода'},
    {id : 3 , title : 'Регуляторы газового давления'},
    {id : 4 , title : 'Трубопроводная арматура'},
    {id : 5 , title : 'Отдельные соединительне элементы, детали трубопровода'},
    {id : 6 , title : 'Регуляторы газового давления'},
]



const productsReducer = (state = initialState,action) =>  {
    switch(action.type){
        default :
        return state
    }
}

export default productsReducer