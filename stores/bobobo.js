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

      const updatedCart = state.cart.map((product) =>
        product.id === id ? {...product, count: product.count + 1} : product,
      );

      return {
        ...state,
        cart: updatedCart,
      };
    }),
  removeFromCart: () => {},
}));

export default cartStore;
