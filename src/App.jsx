import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ModalContext from "./context/ModalContext";
import DesignModal from "./components/DesignModal";
import { useContext, useEffect } from "react";
import { images } from "./assets";

function App() {
  const techStack = {
    HTML: images.html5Icon,
    CSS: images.css3Icon,
    JavaScript: images.javascriptIcon,
    Java: images.javaIcon,
    "C Lang": images.clangIcon,
    "Tailwind CSS": images.tailwindIcon,
    React: images.reactIcon,
    NodeJS: images.nodejsIcon,
    PostgreSQL: images.postgresqlIcon,
    Figma: images.figmaicon,
    Photoshop: images.photoshop,
  };

  const contactIcons = {
    "United States": images.mapPin,
    Email: images.envelope,
    LinkedIn: images.linkedinIcon,
    Github: images.github,
  };

  const contactLinks = {
    "United States": "",
    Email: "mailto:tosinfakunle@yahoo.com",
    LinkedIn: "https://www.linkedin.com/in/daniel-fakunle/",
    Github: "https://github.com/danielfakunle",
  };

  const { modalIsOpen } = useContext(ModalContext);

  useEffect(() => {
    let site = document.getElementsByTagName("html")[0];
    modalIsOpen
      ? (site.style.overflowY = "auto")
      : (site.style.overflowY = "auto");
  }, [modalIsOpen]);

  return (
    <div className={`light relative`}>
      <DesignModal />
      <Header />
      <main className="flex flex-col items-center">
        <Hero techStack={techStack} />
        <div className="w-screen flex justify-center bg-gray-100">
          <Projects techStack={techStack} />
        </div>
        <Contact contactLinks={contactLinks} contactIcons={contactIcons} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
