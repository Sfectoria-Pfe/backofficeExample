import { createContext } from "react";

export const ShowContext = createContext({
  product: {
    products: [],
    product: {}, 
  },
  user: {
    users: [],
    user: {},
  },
});
