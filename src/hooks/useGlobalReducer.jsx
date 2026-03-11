import { useContext, useReducer, createContext } from "react";
import storeReducer, { initialStore, actions as storeActions } from "../store";

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore());

  const actions = {
    addFavorite: (name) => storeActions.addFavorite(dispatch, name),
    removeFavorite: (name) => storeActions.removeFavorite(dispatch, name)
  };

  return (
    <StoreContext.Provider value={{ store, actions }}>
      {children}
    </StoreContext.Provider>
  );
}

export default function useGlobalReducer() {
  return useContext(StoreContext);
}