import './App.css';
import { AboutMe } from './components/AboutMe';
import ContactForm from './components/ContactForm';
import { Footer } from './components/Footer';
import HeroSection from './components/HeroSection';
import { MyNavbar } from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className='bg-[url("https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80")] bg-cover bg-no-repeat md:bg-auto  bg-gray-900'>
      <MyNavbar />
      <div className="p-2">
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
