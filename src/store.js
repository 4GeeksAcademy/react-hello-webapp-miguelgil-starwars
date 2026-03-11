export const initialStore = () => {
  return {
    favorites: []
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_favorite":
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };

    case "remove_favorite":
      return {
        ...store,
        favorites: store.favorites.filter(
          (favorite) => favorite !== action.payload
        )
      };

    default:
      return store;
  }
}

export const actions = {
  addFavorite: (dispatch, name) => {
    dispatch({
      type: "add_favorite",
      payload: name
    });
  },

  removeFavorite: (dispatch, name) => {
    dispatch({
      type: "remove_favorite",
      payload: name
    });
  }
};