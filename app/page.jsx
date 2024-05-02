import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import dynamic from 'next/dynamic'

const Contacts = dynamic(() => import("@/components/Contact"), { ssr: false });
export default function Home() {
  return (
      <main className = 'w-full max-w-[1440px] bg-white mx-auto overflow-hidden'>
          {/*<Header/>*/}
          <Hero/>
          <Services/>
          <ContactForm/>
          <About moreBut = 'rounded-3xl'/>
          <Contacts/>
          <Testimonials/>
          {/*<Footer/>*/}
      </main>
  );
}

// Yu Gothic UI
// RGB  0, 145, 106 CMYK  83, 17, 69, 3
// RGB  135, 135, 135 CMYK  47, 37, 37, 17
// RGB  60, 60, 60 CMYK  67, 57, 54, 60