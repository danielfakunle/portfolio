import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ModalContext from "./context/ModalContext";
import DesignModal from "./components/DesignModal";
import { useContext, useEffect } from "react";

function App() {
  const techStack = {
    HTML: "src/assets/icons8-html-5.svg",
    CSS: "src/assets/icons8-css3.svg",
    JavaScript: "src/assets/icons8-javascript.svg",
    Java: "src/assets/icons8-java.svg",
    "C Lang": "src/assets/icons8-c-programming.svg",
    "Tailwind CSS": "src/assets/icons8-tailwindcss.svg",
    React: "src/assets/icons8-react-native.svg",
    NodeJS: "src/assets/icons8-nodejs.svg",
    PostgreSQL: "src/assets/icons8-postgresql.svg",
    Figma: "src/assets/icons8-figma.svg",
    Photoshop: "src/assets/icons8-adobe-photoshop.svg",
  };

  const contactIcons = {
    "United States": "./src/assets/map-pin.svg",
    Email: "./src/assets/envelope.svg",
    LinkedIn: "./src/assets/linkedin.svg",
    Github: "./src/assets/github.svg",
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
