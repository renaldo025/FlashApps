import { createSlice } from '@reduxjs/toolkit'

export const setData = createSlice({
  name: 'reducer',
  initialState: {
    scheduleData: [],
  },
  reducers: {
    setScheduleData: (state, action) => {
      state.scheduleData = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setScheduleData } = setData.actions

export default setData.reducer