const ChatModule = {
  state: {
    chats: []
  },
  mutations: {
    setCrisis(state, payload) {
      state.chats[payload.id].crisises.push(payload.crisis);
    },
    setChat(state, payload) {
      state.chats[payload.id].messages.push(payload.message);
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
    addCrisis({ commit }, payload) {
      let chatID = payload.chatID;
      const crisis = {
        initiator: payload.initiator,
        recipient: payload.recipient,
        reason: payload.content,
        date: payload.date
      };
      commit("setCrisis", { id: chatID, crisis: crisis });
    },
    loadChats({ commit }) {
      commit("setChats", [
        {
          participants: ["", ""],
          statement: "Painting roads white will stop global warming",
          messages: [
            { user: "bob", content: "the", date: "1.1.2019" },
            { user: "alice", content: "quick", date: "1.1.2019" },
            { user: "bob", content: "brown", date: "1.1.2019" },
            { user: "alice", content: "fox", date: "1.1.2019" },
            { user: "bob", content: "jumped", date: "1.1.2019" },
            { user: "alice", content: "over", date: "1.1.2019" },
            { user: "bob", content: "the", date: "1.1.2019" },
            { user: "alice", content: "lazy", date: "1.1.2019" },
            { user: "bob", content: "dog", date: "1.1.2019" }
          ],
          crisises: [
            {
              initiator: "Bob",
              recipent: "Iwan",
              reason: "the sky is blue",
              date: "1.1.2019"
            }
          ]
        },
        {
          participants: ["", ""],
          statement: "Batman can defeat superman",
          messages: [
            { user: "alice", content: "the", date: "1.1.2019" },
            { user: "bob", content: "slow", date: "1.1.2019" },
            { user: "alice", content: "yellow", date: "1.1.2019" },
            { user: "bob", content: "snake", date: "1.1.2019" },
            { user: "alice", content: "hopped", date: "1.1.2019" },
            { user: "bob", content: "under", date: "1.1.2019" },
            { user: "alice", content: "the", date: "1.1.2019" },
            { user: "bob", content: "fearful", date: "1.1.2019" },
            { user: "alice", content: "elephant", date: "1.1.2019" }
          ],
          crisises: [
            {
              initiator: "Bob",
              recipent: "Iwan",
              reason: "the sky is blue",
              date: "1.1.2019"
            }
          ]
        }
      ]);
    }
  },
  getters: {
    chats(state) {
      return state.chats;
    }
  }
};

export default ChatModule;
