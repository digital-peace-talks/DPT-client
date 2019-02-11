import * as firebase from 'firebase'

const ChatModule = {
  state: {
    chats: []
  },
  mutations: {
    setMessagesEmpty (state) {
      state.messages = []
    },
    setChats (state, payload) {
      state.chats = payload
    }
  },
  actions: {
    sendMessage ({commit}, payload) {
      let chatID = payload.chatID
      const message = {
        user: payload.username,
        content: payload.content,
        date: payload.date
      }
      firebase.firestore().collection('messages').doc(chatID).collection('messages').add(message)
        .then(
          (data) => {
          }
        )
        .catch(
          (error) => {
            console.log(error)
          }
        )
    },
    loadChats ({commit}) {
      let chatRef =firebase.firestore().collection('chats')
      let chats = chatRef//.get()
      if(chats){
        //console.log(chats.get())
        commit('setChats',[{statement: 'asd',author:"Alice"},{statement: 'bsd',author:"Alice"}])
      }
    },
    createChat ({commit}, payload) {
      //do something with firestore
      return new Promise((resolve, reject) => {
        resolve(newPostKey)
      })
    }
  },
  getters: {
    messages (state) {
      return state.messages
    },
    chats (state) {
      return state.chats
    }
  }
}

export default ChatModule
