import { configurestore } from '@reduxjs/toolkit'
import counterReducer from ' ../features /counter/counterslice'
export default configureStore({
reducer: {
counter: counterReducer,
},
})
