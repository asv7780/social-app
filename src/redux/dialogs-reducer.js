const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  messages: [
    {id: 1, message: 'how do you do'},
    {id: 2, message: 'z.dkbyu.dkytbzd.jk'},
    {id: 3, message: 'hello'},
    {id: 4, message: 'zdbyxdybny'},
    {id: 5, message: 'ma name is mary'},
    {id: 6, message: 'hi'}
  ],
  newMessageText: '',
  dialogs: [
    {id: 1, name: 'John', userPhoto: 'https://emm.wipro-unza.com/image/userphoto/userphoto.png'},
    {id: 2, name: 'Mark', userPhoto: 'https://d-jones.ru/image/otzivimg.png'},
    {id: 3, name: 'Joe', userPhoto: 'https://image.flaticon.com/icons/png/512/86/86072.png'},
    {id: 4, name: 'Mary', userPhoto: 'https://image.flaticon.com/icons/png/512/89/89827.png'},
    {id: 5, name: 'Kate', userPhoto: 'https://image.flaticon.com/icons/png/512/950/950050.png'},
    {
      id: 6,
      name: 'Lessy',
      userPhoto: 'https://currofacil.com/imagenes_de_empleos/2019/06/334-3349155_cashier-vector-icono-de-cajera.png'
    }
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: 8,
        message: state.newMessageText
      };
      return  {
        ...state,
        newMessageText: '',
        messages: [...state.messages, newMessage]
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMsgText
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageTextCreator = (text) => (
  {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMsgText: text
  }
);

export default dialogsReducer;
