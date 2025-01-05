import { 
  // IconAt, 
  IconMapPin, 
  IconPhone, 
  IconSun,
  IconBrandFacebook
} from '@tabler/icons-react';
import { Box, Stack, Text } from '@mantine/core';
import classes from './ContactIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon size={24} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  // { title: 'Email', description: 'email@mail.com', icon: IconAt },
  { title: 'Phone / Whatsapp', description: '+65 9468 6704', icon: IconPhone },
  { title: 'Address', description: '111 NORTH BRIDGE ROAD, #04-06, PENINSULA PLAZA, SINGAPORE 179098', icon: IconMapPin },
  { title: 'Working hours', description: '8 a.m. – 6 p.m.', icon: IconSun },
  { title: 'Facebook', description: 'https://www.facebook.com/StylicPainting/', icon: IconBrandFacebook },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}