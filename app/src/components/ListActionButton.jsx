import { memo } from 'react'
import { ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText } from '@mui/material'
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material'

const ListActionButton = ({
  children,
  icon,
  primary,
  secondary,
  actionIcon,
  color,
  sx,
  ...rest
}) => {
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
        {actionIcon || <ChevronRightIcon />}
      </ListItemSecondaryAction>
    </ListItemButton>
  )
}

export default memo(ListActionButton)
