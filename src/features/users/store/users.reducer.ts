import { ActionReducerMapBuilder, createSlice, Slice } from "@reduxjs/toolkit"
import { getUsers } from "./users.actions"
import { FeatureState } from "../models/users.interfaces"

const initialState: FeatureState = {
  users: [],
  loading: false,
  isApiCanceled: false,
}

const usersSlice: Slice<FeatureState> = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    setIsApiCanceled: (state, { payload }) => ({
      ...state,
      isApiCanceled: payload,
    }),
  },
  extraReducers: (builder) => {
    getAsyncUsers(builder)
  },
})

export const { setIsApiCanceled } = usersSlice.actions

export default usersSlice.reducer

function getAsyncUsers(builder: ActionReducerMapBuilder<FeatureState>) {
  builder.addCase(getUsers.fulfilled, (state, { payload }) => ({
    ...state,
    loading: false,
    error: "",
    users: payload.results,
  }))
  builder.addCase(getUsers.pending, (state) => ({
    ...state,
    loading: true,
  }))
  builder.addCase(getUsers.rejected, (state, { payload }) => ({
    ...state,
    loading: false,
    users: [],
    error: (payload as any).error,
  }))
}
