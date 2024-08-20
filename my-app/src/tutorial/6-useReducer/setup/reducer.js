export const reducer = (state, action) => {
  if (action.type === `ADD_PERSON`) {
    const newPerson = [...state.people, action.newValue];
    return {
      ...state,
      people: newPerson,
      isModal: true,
      modal_content: `name successfully added`,
    };
  }
  if (action.type === `NO_VALUE`) {
    return { ...state, isModal: true, modal_content: `please add a value` };
  }
  if (action.type === `CLOSE_MODAL`) {
    return { ...state, isModal: false };
  }
  if (action.type === `REMOVE_ITEM`) {
    const newPeople = state.people.filter(
      (people) => people.id !== action.personId
    );
    return {
      ...state,
      people: newPeople,
      isModal: true,
      modal_content: `name removed`,
    };
  }
  return state;
};

