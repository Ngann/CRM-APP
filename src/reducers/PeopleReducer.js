//Note
//actions calls the reducer
//reducer changes the state which renders on the components 


import people from './people.json';

//create a variable initialState with object people
const initialState = {
    people,
    detailedView: false,
    personSelected: null,
}

// create fuction which will pass as the state, the intial state and action.
// inside the function we use a switch statement and returns a new state.
// How redux works: once we call from the application the action, it will be an action type.
// The action type will be passed through the reducer with the initialState
// base on the action type, it will return a new state.
export default (state = initialState, action) => {
    switch (action.type) {
        case 'SELECTED_PERSON':
            return {
                // creates a copy of the state with properties
                ...state,
                detailedView: true,
                personSelected: action.payload
            }
        case 'NONE_SELECTED' :
            return {
                ...state,
                detailedView: false,
                personSelected: null,
            }
        default:
            return state;
    }
}

//now we will create the people.json file