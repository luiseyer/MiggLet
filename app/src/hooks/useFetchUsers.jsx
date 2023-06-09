import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useGetUsers = (params) => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await axios.get(`/api/users${params}`)
      return data
    }
  })
}
