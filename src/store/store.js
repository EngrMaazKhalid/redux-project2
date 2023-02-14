import { createSlice ,configureStore} from '@reduxjs/toolkit'
import uiSlice from './ui-indx'
const  initialCartitem ={ item : [], totalAmount: 0}
const cartSlice = createSlice({
    name: 'item',
    initialState: initialCartitem,
    reducers:{
        Add(state, action){

         const updatedCartItem =state.totalAmount + action.itm.price * action.item.amount

        }
    }
})

const store = configureStore({
    reducer:{ui: uiSlice.reducer}
})
export default store 