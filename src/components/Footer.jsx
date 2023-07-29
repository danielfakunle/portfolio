function Footer() {
  return (
    <footer className="bg-gray-100 border-gray-200 dark:bg-gray-900 w-screen flex justify-center">
      <nav className="container px-4 py-10 md:px-6 flex justify-between">
        <p
          className="text-gray-500 cursor-pointer"
          onClick={() => window.open("https://icons8.com/", "_blank")}
        >
          Icons by Icons8
        </p>
        <div className="flex flex-row justify-between space-x-8 items-center">
          <a
            className="text-gray-900 hover:text-sky-500 dark:text-white"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-gray-900 hover:text-sky-500 dark:text-white"
            href="#projects"
          >
            Projects
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
