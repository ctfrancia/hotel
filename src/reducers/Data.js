const defaultState = {
    adultCount: '',
    childCount: '',
    arrivalDate: '',
    departureDate: '',
    aptCost: '',
    rooms: [],
};

const data = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADULT_COUNT':
      return {

      }
    case 'CHILD_COUNT':
      return {

    }
    case 'ARRIVAL_DATE':
      return Object.assign({}, state, {
        arrivalDate: action.date,
      });
    case 'DEPARTURE_DATE':
      return Object.assign({}, state, {
        departureDate: action.date,
      });
    case 'APT_COST':
      return{

      }
    case 'UPDATE_ROOMS':
      return Object.assign({}, state, {
        rooms: action.rooms
      });
    default:
      return state;
  }
}
export default data;