import '@radix-ui/themes/styles.css';
import Header from "./Header";
import About from './About';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from './Footer';
export default function Home() {
  return (
    <>
      <Header/>
      <About/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  );
}
