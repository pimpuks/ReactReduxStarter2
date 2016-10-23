// State argument is NOT application state,
// only the state that this reducer is responsible for

// reducer cannot return 'undefined' as state which will be
// the case during the first load of the application
// so we initialize it to null here
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
