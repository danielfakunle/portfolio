function Header() {
  return (
    <header className="bg-white border-gray-200 dark:bg-gray-900 w-screen flex justify-center sticky inset-0 z-20 shadow-sm">
      <nav className="container px-4 py-6 md:px-6 flex justify-between">
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
        <button
          className="btn-primary"
          onClick={() => {
            window.location.href = "#contact";
          }}
        >
          LET'S TALK
        </button>
      </nav>
    </header>
  );
}

export default Header;
