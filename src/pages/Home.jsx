// src/pages/Home.jsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Destinations from '../components/Destinations';
import EaF from '../components/EaF';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <div className="relative">
        <img src="assets/Ellipse 8.png" alt="" className="absolute sm:hidden" />
        <img
          src="assets/Decore (1).png"
          alt=""
          className="w-full h-screen object-cover absolute top-0 -right-1 hidden sm:block -z-10"
        />
        <Navbar />
        <Hero />
      </div>
      <Services />
      <Destinations />
      <EaF />
      <Testimonials />
      <Partners />
      <Subscribe />
      <Footer />
    </>
  );
}
