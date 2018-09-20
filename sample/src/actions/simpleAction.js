export const simpleAction = () => dispatch => {
    dispatch({
        type : 'SIMPLE_ACTION',
        payload: 'result of simple actions'
    })
}