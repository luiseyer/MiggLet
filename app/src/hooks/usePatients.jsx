import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuthContext } from '@hooks'
import axios from 'axios'

export const useGetPatients = ({ page = 1, limit = 10, search = '', counter = false }) => {
  const { user: { token } } = useAuthContext()
  const queryClient = useQueryClient()

  return useQuery({
    queryKey: ['patients', { page, limit, search, counter }],

    queryFn: async () => {
      const _page = page - 1
      const params = Object.entries({ page: _page, limit, search, ...(counter ? { counter } : {}) })
        .map(([key, value]) => ([key, value]))

      const searchParams = `?${new URLSearchParams(params).toString()}`

      const { data } = await axios.get(`/api/patients${searchParams}`,
        { headers: { Authorization: `Bearer ${token}` } })

      return data
    },

    onSuccess: (data) => {
      data.patients?.forEach(patient => {
        queryClient.setQueryData(['patients', { id: patient.id }], patient)
      })
    }
  })
}

export const useGetPatient = (id) => {
  const { user: { token } } = useAuthContext()

  return useQuery({
    queryKey: ['patients', { id }],

    queryFn: async () => {
      const { data } = await axios.get(
          `/api/patients/${id}`,
          { headers: { Authorization: `Bearer ${token}` } })

      return data
    }
  })
}

export const useUpdatePatient = (id) => {
  const { user: { token } } = useAuthContext()
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['patients', { id }],

    mutationFn: async (body) => {
      const { data } = await axios.patch(
          `/api/patients/${id}`, body,
          { headers: { Authorization: `Bearer ${token}` } })

      return data
    },

    onSuccess: (data, id) => {
      queryClient.setQueryData(['patients', { id }], data)
    }
  })
}

export const useCreatePatient = () => {
  const { user: { token } } = useAuthContext()
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['patients'],

    mutationFn: async (body) => {
      const { data } = await axios.post(
        '/api/patients/', body,
        { headers: { Authorization: `Bearer ${token}` } })

      return data
    },

    onSuccess: (data) => {
      queryClient.setQueryData(['patients', { id: data.id }], data)
    }
  })
}
