import { ListActionButton } from '@components'
import { useNavigate } from 'react-router-dom'
import { ListItemText, Skeleton } from '@mui/material'

const PatientList = ({ patients }) => {
  const navigate = useNavigate()

  return (
    <>
      {!patients &&
      Array(10).fill(0).map((_, i) => (
        <ListActionButton key={i} divider>
          <ListItemText primary={<Skeleton width={200} />} secondary={<Skeleton width={100} />} />
        </ListActionButton>
      ))}

      {patients?.map((
        {
          id,
          dni,
          firstnames,
          lastnames
        }, i) => {
        const username = firstnames + ' ' + lastnames

        return (
          <ListActionButton key={id} onClick={() => navigate(`/patients/${id}`)} divider>
            <ListItemText primary={username} secondary={dni} />
          </ListActionButton>
        )
      })}
    </>
  )
}

export default PatientList
