import pb from '@lib/pocketbase'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useGetUsers = ({ page = 1, limit = 10, isActive = true, search = '' }) => {
  const queryClient = useQueryClient()

  return useQuery({
    queryKey: ['users', { page, limit, isActive, search }],

    queryFn: async () => {
      const searchQuery = ['firstnames', 'lastnames', 'dni', 'specialty']
        .map((prop) => `${prop} ~ '${search}'`)
        .join(' || ')

      const data = await pb.collection('users').getList(page, limit, {
        filter: `isActive = ${isActive} && (${searchQuery})`,
        sort: '-updated'
      })

      return data
    },

    onSuccess: (data) => {
      for (const user of data.items) {
        queryClient.setQueryData(['users', { id: user.id }], user)
      }
    }
  })
}

export const useGetUser = (id) => {
  const queryClient = useQueryClient()

  return useQuery({
    queryKey: ['users', { id }],

    queryFn: async () => {
      const data = await pb.collection('users').getOne(id)
      return data
    },

    onSuccess: (data, id) => {
      queryClient.setQueryData(['users', { id }], data)
    }
  })
}

export const useUpdateUser = (id) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['users', { id }],

    mutationFn: async (body) => {
      const data = await pb.collection('users').update(id, body)
      return data
    },

    onSuccess: (data) => {
      queryClient.setQueryData(['users', { id: data.id }], data)
    }
  })
}

export const useManageActiveUser = (id) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['users', { id }],

    mutationFn: async (isActive) => {
      const data = await pb.collection('users').update(id, { isActive: !isActive })
      return data
    },

    onSuccess: (data) => {
      queryClient.setQueryData(['users', { id: data.id }], data)
    }
  })
}

export const useManageAdminUser = (id) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['users', { id }],

    mutationFn: async (isAdmin) => {
      const data = await pb.collection('users').update(id, { isAdmin: !isAdmin })
      return data
    },

    onSuccess: (data) => {
      queryClient.setQueryData(['users', { id: data.id }], data)
    }
  })
}
