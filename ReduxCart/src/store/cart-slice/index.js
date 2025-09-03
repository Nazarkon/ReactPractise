import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.itemId === newItem.id);
            if (!existingItem) {
                state.items.push({
                    itemId: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    total: newItem.price
                });
            } else {
                existingItem.quantity++;
                existingItem.total += newItem.price;
            }
            state.totalQuantity++;
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.itemId === id);
            if (existingItem) {
                state.items = state.items.filter(item => item.itemId !== id);
                state.totalQuantity--;
            }
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;