import { htmlToMarkdown } from '@helpers'
import { useGetPatient, useUpdatePatient } from '@hooks/usePatients'
import {
  ArrowBack as ArrowBackIcon,
  ArrowDropDown as ArrowDropDownIcon,
  FormatBold as FormatBoldIcon,
  FormatItalic as FormatItalicIcon,
  FormatListBulleted as FormatListBulletedIcon,
  FormatListNumbered as FormatListNumberedIcon,
  FormatSize as FormatSizeIcon,
  Redo as RedoIcon,
  Send as SendIcon,
  Undo as UndoIcon
} from '@mui/icons-material'
import {
  Backdrop,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Menu,
  MenuItem,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditorButtons = memo(({ editor }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const openHeadings = Boolean(anchorEl)

  return (
    <>
      {editor && (
        <>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
              mt: 4,
              overflowY: 'auto',
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
                value="undo"
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().undo()}
              >
                <UndoIcon />
              </ToggleButton>
              <ToggleButton
                value="redo"
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().redo()}
              >
                <RedoIcon />
              </ToggleButton>
            </ToggleButtonGroup>

            <Divider flexItem orientation="vertical" sx={{ my: 1 }} />

            <ToggleButtonGroup>
              <ToggleButton
                value="font"
                onClick={({ currentTarget }) => setAnchorEl(currentTarget)}
              >
                <FormatSizeIcon />
                <ArrowDropDownIcon />
              </ToggleButton>
            </ToggleButtonGroup>

            <Divider flexItem orientation="vertical" sx={{ my: 1 }} />

            <ToggleButtonGroup>
              <ToggleButton
                value="bold"
                onClick={() => editor.chain().focus().toggleBold().run()}
                selected={editor.isActive('bold')}
              >
                <FormatBoldIcon />
              </ToggleButton>
              <ToggleButton
                value="italic"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                selected={editor.isActive('italic')}
              >
                <FormatItalicIcon />
              </ToggleButton>
            </ToggleButtonGroup>

            <Divider flexItem orientation="vertical" sx={{ my: 1 }} />

            <ToggleButtonGroup>
              <ToggleButton
                value="bulletList"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                selected={editor.isActive('bulletList')}
              >
                <FormatListBulletedIcon />
              </ToggleButton>
              <ToggleButton
                value="orderedList"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                selected={editor.isActive('orderedList')}
              >
                <FormatListNumberedIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>

          <Menu anchorEl={anchorEl} open={openHeadings} onClose={() => setAnchorEl(null)}>
            <MenuItem
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 6 }).run()
                setAnchorEl(null)
              }}
              selected={editor.isActive('heading', { level: 6 })}
            >
              <Typography variant="subtitle1" fontSize="1.15rem" fontWeight={500}>
                Encabezado
              </Typography>
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
        </>
      )}
    </>
  )
})

// biome-ignore lint/suspicious/noEmptyBlockStatements: default props are not empty
const RegisterMedicalBackgroundForm = ({ open, handleClose = () => {} }) => {
  const { id } = useParams()

  const { refetch } = useGetPatient(id)
  const { isLoading, isSuccess, mutate } = useUpdatePatient(id, 'medicalBackground')

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
            style:
              'margin: 0; font-family: "Roboto","Helvetica","Arial",sans-serif; line-height: 1.75; letter-spacing: 0.00938em; font-size: 1.15rem; font-weight: 500;'
          }
        }
      })
    ]
  })

  const [isCompleted, setIsCompleted] = useState(false)
  const [nameValue, setNameValue] = useState('')
  const [descriptionValue, setDescriptionValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new window.FormData(event.currentTarget)
    const medicalBackground = {
      name: formData.get('name'),
      description: formData.get('description')
    }

    mutate(medicalBackground)
  }

  const handleEditContent = (event) => {
    const editor = event.currentTarget.firstChild
    setDescriptionValue(htmlToMarkdown(editor.innerHTML))
  }

  useEffect(() => {
    if (
      descriptionValue &&
      descriptionValue.trim('').length !== 0 &&
      nameValue &&
      nameValue.trim('').length !== 0
    ) {
      return setIsCompleted(true)
    }

    setIsCompleted(false)
  }, [nameValue, descriptionValue])

  return (
    <>
      {open && isLoading && (
        <Backdrop sx={{ color: 'primary.main', zIndex: 9999 }} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      <Dialog
        component="form"
        autoComplete="off"
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        fullScreen
      >
        <DialogTitle
          component="header"
          sx={{ background: ({ gradient }) => gradient.surface, py: '8px !important', px: 1 }}
        >
          <Button
            color="dark"
            onClick={handleClose}
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <ArrowBackIcon />
            Registrar Antecedentes
          </Button>
        </DialogTitle>
        <DialogContent>
          <Stack
            height="100%"
            sx={{
              '& :is(ul, ol)': { pl: 4, m: 0 },
              '& ul': { listStyleType: 'square' },
              '& :is(ul, ol) li': { mb: 2 },
              '& ::marker': { color: 'tertiary.dark' },
              pt: 4,
              pb: 2
            }}
          >
            <TextField
              name="name"
              label="Tipo de Antecedente"
              value={nameValue}
              onChange={({ currentTarget }) => setNameValue(currentTarget.value)}
              required
            />

            <EditorButtons editor={editor} />

            <EditorContent
              editor={editor}
              id="editor"
              onInput={handleEditContent}
              onFocus={handleEditContent}
            />

            <TextField
              name="description"
              value={descriptionValue}
              sx={{ display: 'none' }}
              multiline
              required
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ pb: '1.5rem !important' }}>
          <Button
            disabled={!isCompleted}
            type="submit"
            variant="contained"
            size="large"
            endIcon={<SendIcon />}
          >
            Registrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default memo(RegisterMedicalBackgroundForm)
