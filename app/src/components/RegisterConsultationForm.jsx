import StarterKit from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Backdrop, Stack, Button, CircularProgress, Dialog, DialogContent, DialogTitle, TextField, DialogActions, ToggleButtonGroup, ToggleButton, MenuItem, Menu, Typography, Divider } from '@mui/material'
import { ArrowBack as ArrowBackIcon, Send as SendIcon, Undo as UndoIcon, Redo as RedoIcon, ArrowDropDown as ArrowDropDownIcon, FormatSize as FormatSizeIcon, FormatBold as FormatBoldIcon, FormatItalic as FormatItalicIcon, FormatListBulleted as FormatListBulletedIcon, FormatListNumbered as FormatListNumberedIcon } from '@mui/icons-material'
import { useAuthContext } from '@hooks'
import { useGetPatient, useUpdatePatient } from '@hooks/usePatients'
import { htmlToMarkdown } from '@helpers'

const EditorButtons = ({ editor }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const openHeadings = Boolean(anchorEl)

  return (
    <>
      {editor &&
        <>
          <Stack
            direction='row'
            justifyContent='space-between'
            sx={{
              overflowY: 'auto',
              mt: 4,
              px: 1,
              bgcolor: 'primary.surface',
              border: ({ palette }) => `1px solid ${palette.divider}`,
              '& .MuiToggleButtonGroup-grouped': {
                margin: ({ spacing }) => spacing(0.5),
                border: 0,
                '&.Mui-disabled': { border: 0 },
                '&:not(:first-of-type)': { borderRadius: ({ shape }) => shape.borderRadius },
                '&:first-of-type': { borderRadius: ({ shape }) => shape.borderRadius }
              }
            }}
          >
            <ToggleButtonGroup>
              <ToggleButton
                value='undo'
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().undo()}
              >
                <UndoIcon />
              </ToggleButton>
              <ToggleButton
                value='redo'
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().redo()}
              >
                <RedoIcon />
              </ToggleButton>
            </ToggleButtonGroup>

            <Divider flexItem orientation='vertical' sx={{ my: 1 }} />

            <ToggleButtonGroup>
              <ToggleButton value='font' onClick={({ currentTarget }) => setAnchorEl(currentTarget)}>
                <FormatSizeIcon />
                <ArrowDropDownIcon />
              </ToggleButton>
            </ToggleButtonGroup>

            <Divider flexItem orientation='vertical' sx={{ my: 1 }} />

            <ToggleButtonGroup>
              <ToggleButton
                value='bold'
                onClick={() => editor.chain().focus().toggleBold().run()}
                selected={editor.isActive('bold')}
              >
                <FormatBoldIcon />
              </ToggleButton>
              <ToggleButton
                value='italic'
                onClick={() => editor.chain().focus().toggleItalic().run()}
                selected={editor.isActive('italic')}
              >
                <FormatItalicIcon />
              </ToggleButton>
            </ToggleButtonGroup>

            <Divider flexItem orientation='vertical' sx={{ my: 1 }} />

            <ToggleButtonGroup>
              <ToggleButton
                value='bulletList'
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                selected={editor.isActive('bulletList')}
              >
                <FormatListBulletedIcon />
              </ToggleButton>
              <ToggleButton
                value='orderedList'
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                selected={editor.isActive('orderedList')}
              >
                <FormatListNumberedIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>

          <Menu
            anchorEl={anchorEl}
            open={openHeadings}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 6 }).run()
                setAnchorEl(null)
              }}
              selected={editor.isActive('heading', { level: 6 })}
            >
              <Typography variant='subtitle1' fontSize='1.15rem' fontWeight={500}>Encabezado</Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                editor.chain().focus().setParagraph().run()
                setAnchorEl(null)
              }}
              selected={editor.isActive('paragraph')}
            >
              <Typography>Normal</Typography>
            </MenuItem>
          </Menu>
        </>}
    </>
  )
}

const RegisterConsultationForm = ({ open, handleClose = () => {}, refetchFn = () => {} }) => {
  const { id } = useParams()
  const { user } = useAuthContext()

  const { refetch } = useGetPatient(id)
  const { isLoading, isSuccess, mutate } = useUpdatePatient(id)

  useEffect(() => {
    if (isSuccess) {
      refetch()
      handleClose()
    }
  }, [isSuccess, handleClose, refetch])

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          HTMLAttributes: {
            style: 'margin: 0; font-family: "Roboto","Helvetica","Arial",sans-serif; line-height: 1.75; letter-spacing: 0.00938em; font-size: 1.15rem; font-weight: 500;'
          }
        }
      })
    ]
  })

  const [isCompleted, setIsCompleted] = useState(false)
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new window.FormData(event.currentTarget)
    const consultation = {
      medic: user.id,
      date: new Date(Date.now()),
      description: formData.get('consultation')
    }

    mutate({ consultation })
  }

  const handleEditContent = (event) => {
    const editor = event.currentTarget.firstChild
    setValue(htmlToMarkdown(editor.innerHTML))
  }

  useEffect(() => {
    if (value && value.trim('').length !== 0) {
      return setIsCompleted(true)
    }

    setIsCompleted(false)
  }, [value])

  return (
    <>
      {open && isLoading &&
        <Backdrop sx={{ color: 'primary.main', zIndex: 9999 }} open={isLoading}>
          <CircularProgress color='inherit' />
        </Backdrop>}

      <Dialog
        component='form'
        autoComplete='off'
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        fullScreen
      >
        <DialogTitle component='header' sx={{ background: ({ gradient }) => gradient.surface, py: '8px !important', px: 1 }}>
          <Button color='dark' onClick={handleClose} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ArrowBackIcon />
            Registrar Consulta
          </Button>
        </DialogTitle>
        <DialogContent>
          <Stack
            gap={4} height='100%'
            sx={{
              '& :is(ul, ol)': { pl: 4, m: 0 },
              '& ul': { listStyleType: 'square' },
              '& :is(ul, ol) li': { mb: 2 },
              '& ::marker': { color: 'tertiary.dark' },
              px: 2
            }}
          >
            <EditorButtons editor={editor} />

            <EditorContent
              editor={editor}
              id='editor'
              onInput={handleEditContent}
              onFocus={handleEditContent}
            />

            <TextField name='consultation' value={value} sx={{ display: 'none' }} multiline required />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ pb: '1.5rem !important' }}>
          <Button
            disabled={!isCompleted}
            type='submit'
            variant='contained'
            size='large'
            endIcon={<SendIcon />}
          >
            Registrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default RegisterConsultationForm
