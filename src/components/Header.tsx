import { useState } from 'react';
import {
  Burger,
  Container,
  Group,
  Text,
  // ActionIcon,
  // useMantineColorScheme,
  Drawer,
  Stack,
  Image
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { IconSun, IconMoonStars } from '@tabler/icons-react';
import classes from './Header.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/pricing', label: 'Pricing' },
];

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  // const { colorScheme, setColorScheme } = useMantineColorScheme();

  // const toggleColorScheme = () => {
  //   setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  // };

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <>
      <header className={classes.header}>
        <Container size="lg" className={classes.inner}>
          {/* <Text className={classes.headerTitle} size="xl">Stylic Painting Pte Ltd</Text> */}
          <Image 
          src="stylic_header.svg"
          />
          <Group gap={5} visibleFrom="xs">
            {items}
            {/* <ActionIcon
              variant="default"
              onClick={toggleColorScheme}
              size="lg"
              aria-label="Toggle color scheme"
            >
              {colorScheme === 'dark' ? (
                <IconSun size={20} stroke={1.5} />
              ) : (
                <IconMoonStars size={20} stroke={1.5} />
              )}
            </ActionIcon> */}
          </Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Container>
      </header>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        hiddenFrom="xs"
        zIndex={1000}
        withCloseButton={false}
      >
        <Stack gap="lg">
          <Group justify="space-between" mb="xl">
            <Text fw={700} size="lg">Stylic Painting Pte Ltd</Text>
            <Group>
              {/* <ActionIcon
                variant="default"
                onClick={toggleColorScheme}
                size="lg"
                aria-label="Toggle color scheme"
              >
                {colorScheme === 'dark' ? (
                  <IconSun size={20} stroke={1.5} />
                ) : (
                  <IconMoonStars size={20} stroke={1.5} />
                )}
              </ActionIcon> */}
              <Burger opened={opened} onClick={close} size="sm" />
            </Group>
          </Group>
          <Stack gap="sm">
            {items}
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}