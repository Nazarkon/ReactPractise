import { createContext, useReducer  } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const ShoppingCartContext = createContext({
    items: [],
    addItemToCart: () => { },
    updateItemQuantity: () => { },
});

function shoppingCartReducer(state, action) {
  if(action.type === 'ADD_ITEM') { 
    const updatedItems = [...state.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
        updatedItems.push({
          id: action.payload,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
   }   
   if(action.type === 'UPDATE_ITEM_QUANTITY') {
     const updatedItems = [...state.items];
     const itemIndex = updatedItems.findIndex(item => item.id === action.payload.productId);
     if(itemIndex !== -1) {
       const updatedItem = {
         ...updatedItems[itemIndex],
         quantity: updatedItems[itemIndex].quantity + action.payload.amount
       };
       if(updatedItem.quantity <= 0) {
         updatedItems.splice(itemIndex, 1);
       } else {
         updatedItems[itemIndex] = updatedItem;
       }
     }
     return {
       items: updatedItems
     };
   }
}

export default function ShoppingCartContextProvider({children}) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {
    items: [],
  });

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
        type: 'ADD_ITEM',
        payload:  id
    })
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: 'UPDATE_ITEM_QUANTITY',
      payload: { productId, amount },
    });
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return <ShoppingCartContext.Provider value={ctxValue}>
    {children}
    </ShoppingCartContext.Provider>;

}   