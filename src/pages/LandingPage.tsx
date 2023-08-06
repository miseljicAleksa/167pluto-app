import React from "react"
import UserList from "../features/users/components/UserList"
import MuiButton from "../features/shared/Button"
import { Box } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { setIsApiCanceled } from "../features/users/store/users.reducer"
import { selectIsApiCanceled } from "../features/users/store/users.selectors"

const LandingPage = () => {
  const dispatch = useAppDispatch()
  const isApiCanceled = useAppSelector(selectIsApiCanceled)
  const handleStopButton = () => {
    dispatch(setIsApiCanceled(!isApiCanceled))
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="20px"
      justifyContent="center"
      alignItems="center"
    >
      <UserList />
      <MuiButton title="Stop" variant="contained" onClick={handleStopButton} />
    </Box>
  )
}

export default LandingPage
