//Note
//actions calls the reducer
//reducer changes the state which renders on the components 

//create a variable initialState with object people
const initialState = {
    people,
    detailedView: false,
    personSelected: null,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    project: '',
    notes:'',
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
                detailView: true,
                personSelected: action.selectId
            }

        case 'NONE_SELECTED':
            return {
                ...state,
                detailView: false,
                personSelected: null
            }
        case 'FORM_UPDATE':
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            }

        case 'NEW_CONTACT':
            return{
                ... state,
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                company: '',
                project: '',
                notes:'',
            }
        
        case 'ADD_PERSON' :
            return {
                ...state,
                ...action.newPerson
            }

        default:
            return state;
    }

}

//now we will create the people.json file

