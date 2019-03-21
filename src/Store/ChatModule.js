import * as db from "./db.json";

const ChatModule = {
  state: {
    chats: [],
    currentChat: { crisises: [{}], statement: "" }
  },
  mutations: {
    setCrisises(state, payload) {
      state.chats[payload.id].crisises.push(payload.crisis);
    },
    setChat(state, payload) {
      state.chats[payload.id].messages.push(payload.message);
    },
    //setCrisisStatus(state, payload) {
    //  state.chats[payload.id].crisises.slive(-1).state=payload.;
    //},
    setCurrentChat(state, id) {
      state.currentChat = this.chats[id];
    },
    setChats(state, payload) {
      state.chats = payload;
    }
  },
  actions: {
    sendMessage({ commit }, payload) {
      let chatID = payload.chatID;
      const message = {
        user: payload.username,
        content: payload.content,
        date: payload.date,
        chatID: payload.chatID
      };
      commit("setChat", { id: chatID, message: message });
    },
    setCurrentChat(commit, id) {
      commit("setCurrentChat", id);
    },
    addCrisis({ commit }, payload) {
      let chatID = payload.chatID;
      const crisis = {
        initiator: payload.initiator,
        recipient: payload.recipient,
        reason: payload.reason,
        status: payload.status,
        due: payload.due,
        date: payload.date
      };
      commit("setCrisises", { id: chatID, crisis: crisis });
    },
    loadChats({ commit }) {
      commit("setChats", db.chats);
    }
  },
  getters: {
    chats(state) {
      return state.chats;
    },
    currentChat(state) {
      return state.currentChat;
    },
    currentChatCrisisStatus(state) {
      return state.currentChat.crisises[0].status;
    }
  }
};

export default ChatModule;
