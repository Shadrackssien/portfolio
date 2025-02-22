export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed left-0 right-0 bottom-4 z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur-sm">
        <a href="/" className="nav-item">
          Home
        </a>

        <a href="/about" className="nav-item">
          About
        </a>

        <a href="/contact" className="nav-item">
          Project
        </a>

        <a href="/contact" className="nav-item">
          Contact
        </a>
      </nav>
    </div>
  );
};
