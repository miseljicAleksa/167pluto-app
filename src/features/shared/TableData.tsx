import * as React from "react"
import Box from "@mui/material/Box"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { LinearProgress, Typography } from "@mui/material"

type TableDataProps = {
  rows: { [key: string]: any }[]
  columns: GridColDef[]
  styles?: { [key: string]: any }
  isLoading?: boolean
  title?: number
}

export default function TableData(props: TableDataProps) {
  const { rows, columns, styles, isLoading, title } = props

  function DataGridTitle() {
    return (
      <Box
        style={{
          width: "100%",
          paddingTop: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Average age: {title}</Typography>
      </Box>
    )
  }

  return (
    <Box sx={styles}>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{
          loadingOverlay: LinearProgress,
          toolbar: DataGridTitle,
        }}
        loading={isLoading}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}
