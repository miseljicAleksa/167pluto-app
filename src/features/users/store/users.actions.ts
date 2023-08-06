import { createAsyncThunk } from "@reduxjs/toolkit"
import RegistriesUserService from "../services/users.services"
import { UsersResponse } from "../models/users.interfaces"

const getUsers = createAsyncThunk<UsersResponse, { count: number }>(
  "GET/users",
  async (params) => {
    try {
      const response = await RegistriesUserService.getUsers(params.count)
      return response.data
    } catch (error) {
      console.error("Error fetching users:", error)
      throw error
    }
  },
)

export { getUsers }
