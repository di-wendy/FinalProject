const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'
const MESSAGE_SENT = 'MESSAGE_SENT'
const SENDING_MESSAGE = 'SENDING_MESSAGE'

export const sendingMesssage= (payload) => {
  return({
    type: SENDING_MESSAGE,
    payload
  })
}

export const sentMessage = (id) => {
  return {
    type: MESSAGE_SENT,
    id
  }
}

export const messageReceived = (id, message) => {
  return {
    type: MESSAGE_RECEIVED,
    id,
    message
  }
}

export default (state = {messages:[]}, action) => {
  switch (action.type) {
    case MESSAGE_RECEIVED:
      return {...state, messages: [...state.messages, action.message]}
    case SENDING_MESSAGE:
      
      return state
    case MESSAGE_SENT:
      return state
    default:
      return state
  }
}