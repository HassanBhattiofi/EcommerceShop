import create from 'zustand';

export const cartStore = create((set) => ({
  cart: [],
  addToCart: (id) =>
    set((state) => {
      const isPresent = state.cart.find((product) => product.id === id);

      if (!isPresent) {
        return {
          ...state,
          cart: [...state.cart, {id, count: 1}],
        };
      }

      return {
        ...state,
      };
    }),
  removeFromCart: () => {},
}));

export default cartStore;
