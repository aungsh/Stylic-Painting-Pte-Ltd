import { Accordion, Container, Grid, Image, Title } from '@mantine/core';

import classes from './Faq.module.css';

export function Faq() {
  return (
    <div className={classes.wrapper}>
      <Container 
        size="lg"
        my={
          {
            base: 0,
            md: 100
          }
        }
      >
        <Grid id="faq-grid">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src="/image.svg" alt="Frequently Asked Questions" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>What types of painting services do you offer?</Accordion.Control>
                <Accordion.Panel>We provide interior and exterior painting, as well as repair works to ensure a flawless finish.</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>How do I get a quote?</Accordion.Control>
                <Accordion.Panel>You can request a free quote by contacting us through our website or giving us a call. We’ll schedule an on-site visit to provide an accurate estimate.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>How long will the project take?</Accordion.Control>
                <Accordion.Panel>Most projects take 1–5 days, depending on the size and scope of the job. We’ll provide a detailed timeline during the consultation.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>
                  Do you help with color selection?
                </Accordion.Control>
                <Accordion.Panel>
                Yes, we offer color consultation to help you choose the perfect shades and finishes for your space.
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}