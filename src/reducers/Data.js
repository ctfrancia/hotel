const defaultState = {
  data: {
    adultCount: '',
    childCount: '',
    arrivalDate: '',
    departureDate: '',
    aptCost: '',
  },
};

const data = (state = defaultState.data, action) => {
  switch (action.type) {
    case 'ADULT_COUNT':
      return {

      }
    case 'CHILD_COUNT':
      return {

    }
    case 'ARRIVAL_DATE':
      return{

    }
    case 'DEPARTURE_DATE':
      return {

    }
    case 'APT_COST':
      return{

      }
    default:
      return state;
  }
}
export default data;