import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../state/counter';

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})