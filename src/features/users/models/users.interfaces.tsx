export interface User {
  cell: string
  dob: { date: string; age: number }
  email: string
  gender: string
  id: { name: string; value: string }
  location: {
    street: { name: string; number: number }
    city: string
    coordinates: { latitude: string; longitude: string }
    state: string
    country: string
    postcode: string
    timezone: { offset: string; description: string }
  }
  login: {
    uuid: string
    username: string
    password: string
    sha256: string
    sha1: string
    salt: string
    md5: string
  }
  name: { title: string; first: string; last: string }
  nat: string
  phone: string
  picture: { large: string; medium: string; thumbnail: string }
  registered: { date: string; age: number }
}

export interface FeatureState {
  users: User[]
  loading: boolean
  isApiCanceled: boolean
}

export interface UsersResponse {
  results: User[]
  info: {
    seed: string
    results: number
    page: number
    version: string
  }
}
