
const initialState={}

const reducer = (state=initialState, action) => {
    let newState = {...state};

    switch(action.type){
        
        case 'FETCH_DATA_SUCCESS':
            newState=action.data;
            break;
    }
    return newState;
};

export default reducer;