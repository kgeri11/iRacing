import { MantineProvider, AppShell, Burger, Skeleton, Group, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import style from './home.module.scss'
import { useEffect, useState } from 'react'
import { authentication } from '../../api/postCalls'

const Home = () => {
  const [opened, { toggle }] = useDisclosure()

  authentication()

  return (
    <>
      <MantineProvider defaultColorScheme="dark">
        <AppShell
          header={{ height: { base: 60, md: 70 } }}
          navbar={{
            width: { base: 200, md: 250 },
            breakpoint: 'sm',
            collapsed: { mobile: !opened }
          }}
          padding="md"
        >
          <AppShell.Header>
            <Group h="100%" px="md">
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
              <Title>iRacing</Title>
            </Group>
          </AppShell.Header>
          <AppShell.Navbar p="md">
            Navbar
            {Array(15)
              .fill(0)
              .map((_, index) => (
                <Skeleton key={index} h={28} mt="sm" animate={true} />
              ))}
          </AppShell.Navbar>
          <AppShell.Main>{/* IDE JÖN A CUCC */}</AppShell.Main>
        </AppShell>
      </MantineProvider>
    </>
  )
}

export default Home
