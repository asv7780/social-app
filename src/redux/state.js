 let store = {
   _state: {
     profilePage: {
       posts: [
         {id: 1, post: 'Hi, how are you?', likesCount: 15},
         {id: 2, post: 'Hi, i\'m well', likesCount: 20},
         {id: 3, post: 'Hi, how', likesCount: 35}
       ],
       newPostText: 'Alex.com'
     },
     dialogsPage: {
       messages: [
         {id: 1, message: 'how do you do'},
         {id: 2, message: 'z.dkbyu.dkytbzd.jk'},
         {id: 3, message: 'hello'},
         {id: 4, message: 'zdbyxdybny'},
         {id: 5, message: 'ma name is mary'},
         {id: 6, message: 'hi'}
       ],
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
     }
   },
   _callSubscriber () {
     console.log('state is changed');
   },

   getState() {
     return this._state;
   },
   subscribe(observer) {
     this._callSubscriber = observer;
   },

   addPost() {
     let newPost = {
       id: 5,
       post: this._state.profilePage.newPostText,
       likesCount: 0
     };
     this._state.profilePage.posts.push(newPost);
     this._state.profilePage.newPostText =  ''; //
     this._callSubscriber(this._state);
   },
   updateNewPostText(newText) {
     this._state.profilePage.newPostText = newText;
     this._callSubscriber(this._state);
   },
   // dispatch(action) {
   // }
 };


export default store;
window.store = store;


//store - OOP!!!
