import { Container, Text, Image } from '@mantine/core';
import classes from './FooterLinks.module.css';

const data = [
  {
    title: 'About',
    links: [
      { label: 'Features', link: '#' },
      { label: 'Pricing', link: '#' },
    ],
  }
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner} size={'lg'}>
        <div className={classes.logo}>
          {/* <MantineLogo size={30} /> */}
          <Image 
          src="stylic_logo.svg"
          />
          <br></br>
          <Text size="xs" c="dimmed" className={classes.description}>
            Professional Painting Services.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter} size={'lg'}>
        <Text c="dimmed" size="sm">
          © 2025 stylicpainting.sg. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
}