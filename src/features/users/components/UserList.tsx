import React, { useMemo } from "react"
import TableData from "../../shared/TableData"
import {
  useAutoRefreshData,
  useAppDispatch,
  useAppSelector,
} from "../../../app/hooks"
import { getUsers } from "../store/users.actions"
import { GridColDef } from "@mui/x-data-grid"
import { Avatar, Box, CircularProgress, Typography } from "@mui/material"
import {
  selectIsApiCanceled,
  selectIsLoadingUsers,
  selectUsers,
} from "../store/users.selectors"
import { setIsApiCanceled } from "../store/users.reducer"

const columns: GridColDef[] = [
  {
    field: "avatar",
    headerName: "Avatar",
    width: 60,
    renderCell: (params) => {
      return (
        <>
          <Avatar src={params.value} />
        </>
      )
    },
  },
  { field: "title", headerName: "Title", width: 60 },
  { field: "firstName", headerName: "Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
  { field: "email", headerName: "Email", width: 300 },
  { field: "gender", headerName: "Gender", width: 200 },
]

const UserList = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(selectUsers)
  const isLoadingUsers = useAppSelector(selectIsLoadingUsers)
  const isApiCanceled = useAppSelector(selectIsApiCanceled)

  const averageAge = useMemo(() => {
    if (!users || users.length === 0) return 0

    const totalAge = users.reduce((sum, user) => sum + user.dob.age, 0)

    return Math.round(totalAge / users.length)
  }, [users])

  useAutoRefreshData(
    () => dispatch(getUsers({ count: 10 })),
    10000,
    isApiCanceled,
  )

  return (
    <div>
      <TableData
        rows={users}
        columns={columns}
        isLoading={isLoadingUsers}
        title={averageAge}
        styles={{ paddingTop: "30px" }}
      />
    </div>
  )
}

export default UserList
