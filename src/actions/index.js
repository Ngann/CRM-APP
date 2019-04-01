export const selectPerson = (peopleId) => {
    return {
        type: 'SELECTED_PERSON',
        selectId: peopleId,
    };
};

export const nonePerson = () => {
    return {
        type: 'NONE_SELECTED',
    };
};