import React, { useState } from 'react';
import {
  Button,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
  Container,
} from '@mantine/core';
import emailjs from 'emailjs-com';
import classes from './ContactUs.module.css';
import { ContactIconsList } from './ContactIcons';

export function ContactUs() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    description: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_USER_ID,
      )
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ email: '', phone: '', name: '', description: '' });
      })
      .catch((error) => {
        alert('Failed to send message, please try again later.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <Container fluid>
      <div className={classes.wrapper}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title className={classes.title}>Contact us</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Contact us on WhatsApp and we will get back to you within 24 hours!
            </Text>

            <ContactIconsList />
          </div>
          <div className={classes.form}>
            <form onSubmit={handleSubmit}>
              <TextInput
                label="Email"
                placeholder="your@email.com"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <TextInput
                label="Phone"
                placeholder="91234 5678"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                mt="md"
                required
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <TextInput
                label="Name"
                placeholder="John Doe"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                mt="md"
                required
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <Textarea
                required
                label="Description"
                placeholder="Address of painting location, important details"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                minRows={4}
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />

              <Group justify="flex-end" mt="md">
                <Button type="submit" className={classes.control}>
                  Send message
                </Button>
              </Group>
            </form>
          </div>
        </SimpleGrid>
      </div>
    </Container>
  );
}
