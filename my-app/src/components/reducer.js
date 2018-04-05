const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'
const MESSAGE_SENT = 'MESSAGE_SENT'
const SENDING_MESSAGE = 'SENDING_MESSAGE'

const sendingMesssage= (payload) => {
  return({
    type: SENDING_MESSAGE,
    payload
  })
}

const sentMessage = (id) => {
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

export default reducer = (state, action) => {
  switch (action.type) {
    case MESSAGE_RECEIVED:
      return state
    case SENDING_MESSAGE:
      return state
    case MESSAGE_SENT:
      return state
    default:
      return state
  }
}