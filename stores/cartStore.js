import create from 'zustand';
import persist from '../utils/persist';

const cartStore = create(
  persist(
    {
      key: 'cartItems',
    },
    (set) => ({
      cart: [],
      addToCart: (id) =>
        set((state) => {
          const isPresent = state.cart.find((fruit) => fruit.id === id);

          if (!isPresent) {
            return {
              ...state,
              cart: [...state.cart, {id, count: 1}],
            };
          }

          const updatedCart = state.cart.map((fruit) =>
            fruit.id === id ? {...fruit, count: fruit.count + 1} : fruit,
          );

          return {
            ...state,
            cart: updatedCart,
          };
        }),

      removeFromCart: (id) =>
        set((state) => {
          const isPresent = state.cart.findIndex((fruit) => fruit.id === id);

          if (isPresent === -1) {
            return {
              ...state,
            };
          }

          const updatedCart = state.cart
            .map((fruit) =>
              fruit.id === id
                ? {...fruit, count: Math.max(fruit.id - 1, 0)}
                : fruit,
            )
            .filter((fruit) => fruit.count);

          return {
            ...state,
            cart: updatedCart,
          };
        }),
      decreaseCartQuantity: (id) =>
        set((state) => {
          const isPresent = state.cart.findIndex((fruit) => fruit.id === id);

          if (isPresent === -1) {
            return {
              ...state,
            };
          }

          const updatedCart = state.cart
            .map((fruit) =>
              fruit.id === id
                ? {...fruit, count: Math.max(fruit.count - 1, 0)}
                : fruit,
            )
            .filter((fruit) => fruit.count);

          return {
            ...state,
            cart: updatedCart,
          };
        }),
      increaseCartQuantity: (id) =>
        set((state) => {
          const isPresent = state.cart.findIndex((fruit) => fruit.id === id);

          if (isPresent === -1) {
            return {
              ...state,
            };
          }

          const updatedCart = state.cart
            .map((fruit) =>
              fruit.id === id
                ? {...fruit, count: Math.max(fruit.count + 1, 0)}
                : fruit,
            )
            .filter((fruit) => fruit.count);

          return {
            ...state,
            cart: updatedCart,
          };
        }),
    }),
  ),
);

//const jsonValue = JSON.stringify();

export default cartStore;
