export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_POSTS':
            return {lists: action.payload}

        default: 
            return state
    }
}