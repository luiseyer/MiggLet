import { ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText } from '@mui/material'
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material'

const ListActionButton = ({ children, icon, primary, secondary, color, sx, ...rest }) => {
  return (
    <ListItemButton
      component='li'
      sx={{
        bgcolor: color || 'light.main',
        pr: 6,
        gap: 2,
        '& :is(.MuiListItemText-primary, .MuiListItemText-secondary)': {
          overflow: 'hidden', textOverflow: 'ellipsis'
        },
        '& :is(.MuiListItemIcon-root, .MuiListItemAvatar-root)': {
          minWidth: 'auto'
        },
        ...sx
      }}
      {...rest}
    >
      {children}
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      {(primary || secondary) && <ListItemText primary={primary} secondary={secondary} />}
      <ListItemSecondaryAction>
        <ChevronRightIcon />
      </ListItemSecondaryAction>
    </ListItemButton>
  )
}

export default ListActionButton
