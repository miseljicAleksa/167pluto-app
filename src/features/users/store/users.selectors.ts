import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"
import { FeatureState, User } from "../models/users.interfaces"

const featureSelectors = (state: RootState) => state.users

export const selectIsLoadingUsers = createSelector(
  featureSelectors,
  (state: FeatureState) => state.loading,
)

export const selectIsApiCanceled = createSelector(
  featureSelectors,
  (state: FeatureState) => state.isApiCanceled,
)

export const selectUsers = createSelector(
  featureSelectors,
  (state: FeatureState) => {
    return state.users.map((user: User) => {
      return {
        ...user,
        email: user.email,
        gender: user.gender,
        title: user.name.title,
        firstName: user.name.first,
        lastName: user.name.last,
        avatar: user.picture.thumbnail,
        id: user.email,
      }
    })
  },
)
