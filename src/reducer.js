const initialState = {
    inputData: 'nature'
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case "SEARCH": 
            return {
                inputData: action.payload
            }
        default: 
            return state;
    }
}