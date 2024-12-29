import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
// import { Features } from './components/Features';
import { Grids } from './components/Grids';
import { ContactUs } from './components/ContactUs';
import { Faq } from './components/Faq';
import { FooterLinks } from './components/FooterLinks';
import { CardsCarousel } from './components/CardsCarousel';

function App() {

  return (
    <>
      <MantineProvider defaultColorScheme="light">
        <Header />
        <Hero />
        {/* <Features /> */}
        <CardsCarousel />
        <Grids />
        <Faq />
        <ContactUs />
        <FooterLinks />
      </MantineProvider>
    </>
  )
}

export default App
