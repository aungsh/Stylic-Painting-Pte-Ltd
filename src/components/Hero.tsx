import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './Hero.module.css';

export function Hero() {
  const scrollToContact = () => {
    const section = document.getElementById('contactsection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container size="lg">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <span className={classes.highlight}>Quality Work. </span>
            On Time.
            Every Time.
            {/* Let's <span className={classes.highlight}>transform your space</span> with
            trusted painting experts */}
          </Title>
          <Text c="dimmed" mt="md">
            Transform your space with trusted painting experts.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Internal Painting</b> – Fresh, lasting finishes for your interiors.
            </List.Item>
            <List.Item>
              <b>Repair Works</b> – Fixing cracks and damages for a smooth paint job.
            </List.Item>
            <List.Item>
              <b>External Repainting</b> – Durable, weather-resistant exterior finishes.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button
              radius="xl"
              size="md"
              className={classes.control}
              onClick={scrollToContact}
            >
              Get a quote!
            </Button>
          </Group>
        </div>
        <Image src="/painting.png" className={classes.image} />
      </div>
    </Container>
  );
}
