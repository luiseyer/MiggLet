import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuthContext } from '@hooks'
import axios from 'axios'

export const useGetUsers = ({ page = 1, limit = 10, view = 'active', search = '', counter = false }) => {
  const { user: { token } } = useAuthContext()
  return useQuery({
    queryKey: ['users', { page, limit, view, search, counter }],
    queryFn: async () => {
      const _page = page - 1
      const params = Object.entries({ page: _page, limit, view, search, ...(counter ? { counter } : {}) })
        .map(([key, value]) => ([key, value]))

      const searchParams = `?${new URLSearchParams(params).toString()}`

      const { data } = await axios.get(`/api/users${searchParams}`,
        { headers: { Authorization: `Bearer ${token}` } })

      return data
    }
  })
}

export const useGetUser = (id) => {
  const { user: { token } } = useAuthContext()

  return useQuery({
    queryKey: ['users', { id }],
    queryFn: async () => {
      const { data } = await axios.get(
        `/api/users/${id}`,
        { headers: { Authorization: `Bearer ${token}` } })

      return data
    }
  })
}

export const useUpdateUser = (id) => {
  const queryClient = useQueryClient()
  const { user: { token } } = useAuthContext()

  return useMutation({
    mutationKey: ['user', { id }],
    mutationFn: async (body) => {
      const { data } = await axios.patch(
        `/api/users/${id}`, body,
        { headers: { Authorization: `Bearer ${token}` } })

      return data
    },
    onSuccess: (data, variables) => {
      queryClient.setQueryData(['user', { id: variables.id }], data)
    }
  })
}

export const useDeleteUser = (id) => {
  const { user: { token } } = useAuthContext()

  return useMutation({
    mutationKey: ['user', { id }],
    mutationFn: async () => {
      const { data } = await axios.patch(
        `/api/users/set-remove-active/${id}`, {},
        { headers: { Authorization: `Bearer ${token}` } })

      return data
    },
    onMutate: (data) => data
  })
}
