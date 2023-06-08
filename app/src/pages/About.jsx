import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'
import { PageContainer, NavigationMenu, Section } from '@components'

const AboutPage = () => {
  const { hash } = useParams()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash).scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  return (
    <PageContainer>
      <NavigationMenu variant='toolbar' title='acerca de' />

      <Section spacing='2rem' sx={{ display: 'grid', gridTemplateColumns: '100%' }}>
        <Typography variant='h3'>
          MiggLet
        </Typography>

        <Typography mt={2}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur eligendi eveniet expedita, atque quam omnis nam praesentium amet vel vero delectus? Consequuntur alias blanditiis molestiae vitae placeat libero, expedita quos voluptatibus exercitationem, aliquid modi a. Molestias repellendus quod laborum praesentium nostrum, autem tempora quia, beatae incidunt harum rerum neque quas doloribus omnis corporis. Totam nostrum dolores saepe id ab et! Temporibus, expedita exercitationem? Molestiae facilis incidunt aut voluptatibus atque, delectus velit excepturi provident accusamus obcaecati. Ex neque nemo perspiciatis at praesentium dolor odit dicta quis aperiam a exercitationem beatae sint, recusandae quam sunt reprehenderit consectetur officia debitis consequuntur accusantium delectus? Nihil totam inventore dolorem! Beatae repellat doloremque suscipit, est repudiandae voluptatum praesentium aut explicabo optio! Vitae expedita, aliquid incidunt laudantium possimus tenetur iusto dolore doloribus, neque amet est corporis voluptas saepe odio tempora quis quibusdam hic temporibus! Doloremque repellendus quaerat sapiente ex nihil molestias, itaque voluptate veritatis autem at incidunt amet minus non quo enim cupiditate quibusdam voluptatibus ratione aperiam? Cum voluptatibus quas accusamus quasi veniam dolor repellat nihil, modi adipisci libero tenetur maxime quis tempora odit deleniti ex cumque minima architecto, quibusdam pariatur facilis. Placeat nam molestiae expedita officia laudantium doloremque. Blanditiis velit atque voluptatibus, voluptas ullam illo doloribus.
        </Typography>

        <Typography pt={4} variant='h4' id='delete-users'>
          Eliminar usuarios
        </Typography>

        <Typography mt={2}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur eligendi eveniet expedita, atque quam omnis nam praesentium amet vel vero delectus? Consequuntur alias blanditiis molestiae vitae placeat libero, expedita quos voluptatibus exercitationem, aliquid modi a. Molestias repellendus quod laborum praesentium nostrum, autem tempora quia, beatae incidunt harum rerum neque quas doloribus omnis corporis. Totam nostrum dolores saepe id ab et! Temporibus, expedita exercitationem? Molestiae facilis incidunt aut voluptatibus atque, delectus velit excepturi provident accusamus obcaecati. Ex neque nemo perspiciatis at praesentium dolor odit dicta quis aperiam a exercitationem beatae sint, recusandae quam sunt reprehenderit consectetur officia debitis consequuntur accusantium delectus? Nihil totam inventore dolorem! Beatae repellat doloremque suscipit, est repudiandae voluptatum praesentium aut explicabo optio! Vitae expedita, aliquid incidunt laudantium possimus tenetur iusto dolore doloribus, neque amet est corporis voluptas saepe odio tempora quis quibusdam hic temporibus! Doloremque repellendus quaerat sapiente ex nihil molestias, itaque voluptate veritatis autem at incidunt amet minus non quo enim cupiditate quibusdam voluptatibus ratione aperiam? Cum voluptatibus quas accusamus quasi veniam dolor repellat nihil, modi adipisci libero tenetur maxime quis tempora odit deleniti ex cumque minima architecto, quibusdam pariatur facilis. Placeat nam molestiae expedita officia laudantium doloremque. Blanditiis velit atque voluptatibus, voluptas ullam illo doloribus.
        </Typography>
      </Section>

    </PageContainer>
  )
}

export default AboutPage
