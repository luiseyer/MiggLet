import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Skeleton, Stack, Typography } from '@mui/material'
import { TextSnippet as TextSnippetIcon } from '@mui/icons-material'
import { ListActionButton } from '@components'

const PatientList = ({ data, isLoading, limit }) => {
  const colors = ['primary', 'secondary', 'tertiary']
  let color = -1

  const navigate = useNavigate()

  return (
    <>
      {!isLoading && data?.count === 0 &&
        <Stack justifyContent='center' alignItems='center' height='100%' px='2rem'>
          <TextSnippetIcon color='secondary' sx={{ width: '8rem', height: '8rem' }} />
          <Typography variant='h2' textAlign='center'>Sin resultados</Typography>
        </Stack>}

      {isLoading &&
      Array(limit).fill(0).map((_, i) => (
        <ListActionButton
          key={i}
          icon={
            <Skeleton
              component={TextSnippetIcon} variant='rectangular'
              sx={{ bgcolor: 'transparent', color: 'rgba(0, 0, 0, 0.11)', width: '2.5rem', height: '2.5rem' }}
            />
          }
          primary={<Skeleton width={200} />} secondary={<Skeleton width={100} />}
        />
      ))}

      {data?.patients?.map((
        {
          id,
          dni,
          firstnames,
          lastnames
        }) => {
        const username = `${firstnames} ${lastnames}`
        color = color < 2 ? ++color : 0

        return (
          <ListActionButton
            key={id}
            onClick={() => navigate(`/patients/${id}`)}
            icon={<TextSnippetIcon color={colors.at(color)} sx={{ width: '2.5rem', height: '2.5rem' }} />}
            primary={username}
            secondary={dni}
          />
        )
      })}
    </>
  )
}

export default memo(PatientList)
