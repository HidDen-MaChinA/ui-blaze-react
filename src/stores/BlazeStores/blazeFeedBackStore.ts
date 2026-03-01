import { create } from "zustand";

export type BlazeFeedBackStoreType = {
    feedBacksMessageMap: Map<string, string[]>
    addFeedBackMap: (name: string)=>void
    dispatchMessageToFeedBackMap: (name: string, message: string)=>void
}

export const useBlazeFeedBackStore = create<BlazeFeedBackStoreType>((set) => ({
  feedBacksMessageMap: new Map(),
  addFeedBackMap: (name) => {
    set((state) => {
      const hasFeedBacksMessage = state.feedBacksMessageMap.get(name);
      if (hasFeedBacksMessage) {
        return state;
      }
      state.feedBacksMessageMap.set(name, []);
      return { feedBacksMessageMap: new Map(state.feedBacksMessageMap) };
    });
  },
  dispatchMessageToFeedBackMap: (name, message) => {
    set((state)=>{
      const feedBacksMessage = state.feedBacksMessageMap.get(name);
      if (feedBacksMessage) {
        feedBacksMessage.push(message);
        state.feedBacksMessageMap.set(name, feedBacksMessage);
        return {feedBacksMessageMap: new Map(state.feedBacksMessageMap)}
      }
      return state;
    })
  },
}));

