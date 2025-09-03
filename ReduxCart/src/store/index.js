import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice/index';
import cartSlice from './cart-slice/index';

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer,
    }
});

export default store;