import { ListActionButton } from '@components'
import { useNavigate } from 'react-router-dom'
import { Skeleton } from '@mui/material'
import { TextSnippet as TextSnippetIcon } from '@mui/icons-material'

const PatientList = ({ patients }) => {
  const colors = ['primary', 'secondary', 'tertiary']
  let color = -1
  const navigate = useNavigate()

  return (
    <>
      {!patients &&
      Array(10).fill(0).map((_, i) => (
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

      {patients?.map((
        {
          id,
          dni,
          firstnames,
          lastnames
        }, i) => {
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

export default PatientList
