import { memo, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'
import { PageContainer, NavigationMenu, Section } from '@components'

const AboutPage = () => {
  const { hash } = useParams()

  useEffect(() => {
    if (hash) {
      const title = document.getElementById(hash)
      title.classList.add('--active')
      title.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => { title.classList.remove('--active') }, 5000)
    }
  }, [hash])

  return (
    <PageContainer>
      <NavigationMenu variant='toolbar' title='acerca de' />

      <Section spacing='2rem' sx={{ display: 'grid', gridTemplateColumns: '100%' }}>
        <Typography
          component='div'
          sx={{
            '.h3, .h4': {
              pt: 2
            },
            '.--active': {
              outline: 'none',
              color: 'primary.dark'
            }
          }}
        >
          <Typography className='h3' variant='h3'>
            ¿Qué es MiggLet?
          </Typography>

          <p>
            MiggLet es una aplicación web progresiva diseñada con el propósito de optimizar los procesos de registro, gestión y control de historias clínicas en las instituciones medicó-asistenciales. Fué desarrollada por los Ingenieros Luis Reyes y Joseilys Yanez con el objetivo de brindar una herramienta tecnológica que permita a los profesionales médicos, de enfermería y demás especialistas de la salud, suministrar información en tiempo real y que además permita tomar las decisiones que mejor convengan en lapsos de tiempos mínimos, asimismo, a maximizar su productividad, calidad de atención al paciente e ingresos.
          </p>

          <Typography className='h4' variant='h4' id='create-users'>
            Registrando nuevos usuarios
          </Typography>

          <p>
            Solo el usuario administrador es quien puede crear nuevos usuarios. Para ello debe presionar el botón que se muestra en la parte inferior del módulo de usuarios.
          </p>

          <p>
            Una vez pulsado el botón se muestra el formulario de registro, en el cual se debe ingresar el correo del usuario que se desea agregar y se presiona el botón de enviar.
          </p>

          <Typography className='h4' variant='h4' id='delete-users'>
            Eliminando usuarios
          </Typography>

          <p>
            Para eliminar usuarios se debe presionar el botón eliminar que se encuentra en la parte superior del perfil de cada usuario.
          </p>

          <p>
            Una vez eliminado el usuario perderá acceso total a la aplicación, sin embargo todos los datos registrados por el mismo, no serán eliminados. En efecto, los usuarios no se eliminan, solo se desactivan. Para reactivarlos debe dirigirse a ajustes
          </p>

          <Typography className='h4' variant='h4' id='manage-admin-users'>
            Asignar Administrador
          </Typography>

          <p>
            Para asignar como administrador a otro usuario, se debe presionar el botón de configurar tipo de usuario ubicado en la parte superior del perfil de cada usuario. Cabe destacar que, solo el usuario administrador es quien puede realizar esta acción.
          </p>
        </Typography>
      </Section>

    </PageContainer>
  )
}

export default memo(AboutPage)
