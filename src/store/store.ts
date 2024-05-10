import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import { bigAreasApi } from './api/bigAreasApi'

export const store = configureStore({
	reducer: {
		userSlice,
		[bigAreasApi.reducerPath]: bigAreasApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(bigAreasApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
