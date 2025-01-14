import { Carousel } from '@mantine/carousel';
import { Container, Paper, Text, Title } from '@mantine/core';
import classes from './CardsCarousel.module.css';

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      {/* <Button variant="white" color="dark">
        Read article
      </Button> */}
    </Paper>
  );
}

const data = [
  {
    image:
      'Picture1.jpeg',
    title: 'A fresh coat for a timeless look',
    category: 'EXTERIOR REPAINTING',
  },
  {
    image:
      'Picture2.jpeg',
    title: "Turn your house into a home you'll love",
    category: 'INTERIOR PAINTING',
  },
  {
    image:
      'Picture3.jpeg',
    title: 'Fresh colors, fresh perspectives',
    category: 'INTERIOR PAINTING',
  },
  {
    image:
      'Picture4.jpeg',
    title: 'Protecting your floors, perfecting your walls',
    category: 'INTERIOR PAINTING',
  },
];

export function CardsCarousel() {
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container fluid mb={15}>
        <Carousel
        slideSize={{ base: '100%', sm: '70%' }}
        slideGap={{ base: '15px', sm: '15px' }}
        align="start"
        loop
        >
        {slides}
        </Carousel>
    </Container>
  );
}