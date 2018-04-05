const colors = [ 'red', 'blue', 'green' ];
const initialState = {
   cars : [
    { id: 1, make: 'Chevy', model: 'Bolt', year: 2017, color: 'blue', price: 40000 },
    { id: 2, make: 'Ford', model: 'F-150', year: 2016, color: 'red', price: 45000 },
  ],
  editCarId : -1
}

const ADD = 'ADD';
const DELETE = 'DELETE';
const EDIT = 'EDIT'
const SAVE = 'SAVE';
const CANCEL = 'CANCEL';


export const addCar = (car) => {
  return {
    type: ADD,
    car
  }
};

export const deleteCar = (carId) => {
  return {
    type: DELETE,
    carId
  }
};

export const editCar = (carId) => {
  return {
    type: EDIT,
    carId
  }
};

export const saveCar = (car) => {
  return {
    type: SAVE,
    car
  }
};

export const cancel =() => {
  type: CANCEL
}

const findIndex = (carId, cars) => {
  const carIndex = cars.findIndex(c => c.id === carId);
  return carIndex;
}

export default (state = initialState, action) => {
  switch (action.type) {
      case ADD:
          return {
                editCarId: -1,     
                cars: state.cars.concat({
                    id: Math.max(...state.cars.map(c => c.id)) + 1,
                    ...state.car
                }),
          }
      case DELETE:
          return {
              ...state,
              cars: state.cars.slice(0, findIndex(action.carId, state.cars)).concat(state.cars.slice(findIndex(action.carId, state.cars) + 1))
          }
      case EDIT:
          return {
              ...state,
              editCarId: action.carId,
          }
      case SAVE:
          return {
              ...state,
                  cars: [...state.cars.slice(0, findIndex(action.car.carId, state.cars)), action.car, ...state.cars.slice(findIndex(action.car.carId, state.cars) + 1)],
                  editCarId: -1,
          }
       case CANCEL:
          return {
              ...state,
              editCarId: -1,
          }

      default:
          return state
    }
  }