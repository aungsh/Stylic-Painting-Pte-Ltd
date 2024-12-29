import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './Hero.module.scss';

export function Hero() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
      <Title className={classes.title}>
            <Text
                className={classes.title}
                variant="gradient"
                gradient={{ from: 'Yellow', to: 'cyan', deg: 90 }}
                component="span"  // Ensure this stays inline
            >
                Transform
            </Text>
            <Text className={classes.title} component="span"> Your Space with Trusted Painting Experts</Text>  {/* Keep this inline */}
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
        Expert painting, renovation, and repair services to enhance your space. Quality work, on time, 
        every time. Get your quote today!
        </Text>

        <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
          Get started
        </Button>
      </Container>
    </div>
  );
}