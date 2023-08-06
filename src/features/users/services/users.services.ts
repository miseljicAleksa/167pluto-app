import api from "../../api/api"
import { UsersResponse } from "../models/users.interfaces"

class RegistriesPublicService {
  getUsers(count: number) {
    return api.get<UsersResponse>(`?results=${count}`)
  }
}

const PubSerivce = new RegistriesPublicService()

export default PubSerivce
