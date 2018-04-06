import thunk from 'redux-thunk';

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

export const SendMessages = (chat, name, message, image) => async dispatch => {
  if(name.length === 0){
    alert("Name must be at least 1 character")
  }
  else{
    if (image.length > 0){
              if(image.startsWith('http'))
              {
                if(message.length===0){
                  chat.send({
                      name : name,
                      image : image
                  }).then(({id}) => {
                      //console.log(id)
                  }).catch(e => {
                      console.log(e)
                  })
                }
                else{
                  chat.send({
                    name: name,
                    message: message,
                    image: image
                    }).then(({id}) => {
                      dispatch(messageReceived(id, message))
                    }).catch(e => {
                      console.log(e)
                    })
                }
              }
              else{
                  alert("Image must be a valid URL");
              }
          }
          else {
              if(message.length === 0){
                  alert("Please enter message or image url")
              }
              else{
                  chat.send({
                      name : name,
                      message : message
                  }).then(({id}) => {
                      //console.log(id)
                  }).catch(e => {
                      console.log(e)
                  })
              }
          }
      }
}