export const updateRoomList = (rooms) => ({
  type: 'UPDATE_ROOMS',
  rooms,
});

export const updateArrivalDate = (date) => ({
  type: 'ARRIVAL_DATE',
  date,
});

export const updateDepartureDate = (date) => ({
  type: 'DEPARTURE_DATE',
  date,
});
