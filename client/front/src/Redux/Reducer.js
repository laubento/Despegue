const initialState = {
    flights : []
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'GET_FLIGHT':

            return{
                ...state,
                flights: action.payload
            }
    }
}