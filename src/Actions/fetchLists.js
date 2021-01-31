export const fetchLists = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/lists')
        .then(resp => resp.json())
        .then(lists => {
            dispatch({ type: 'FETCH_POSTS', payload: lists})
        })
    }
}

