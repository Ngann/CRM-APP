export const selectPerson = (peopleId) => {
    return {
        type: 'SELECTED_PERSON',
        selectId: peopleId,
    };
};

export const noneSelected = () => {
    return {
        type: 'NONE_SELECTED',
    };
};

export const formUpdate = ({props, value}) => {
    return {
        type: 'FORM_UPDATE',
        payload: { props, value },
    };
};

export const createNewContact = ({firstName, lastName, phone,email, company, projects, notes}) => {
    return (dispatch) => {
        fetch('https://localhost:8081/contact', {
            method: "POST",
            body: JSON.stringify({
                "firstName": firstName,
                "lastName": lastName,
                "phone": phone,
                "email": email,
                "company": company,
                "projects": projects,
                "notes": notes,
            }),
            headers: {
                "Accept": "application/json",
                "Content-type":"application/json"
            }
        })
        .then((response) => console.log(response))
        .then(() => {
            dispatch({type: 'NEW_CONTACT'});
        })
        .catch(error => console.log(error))
    }
}


//here are all the actions used in reducers